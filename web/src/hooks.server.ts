// src/hooks.server.ts

import type { Handle } from "@sveltejs/kit";

interface Locals {
        subdomain: string | null;
}

export const handle: Handle = async ({ event, resolve }) => {
        const ua = event.request.headers.get("user-agent") ?? "";
        const isGooglebot = /Googlebot/i.test(ua)

        if (isGooglebot) {
                return await resolve(event);
        }

        // Extract subdomain from host header
        const host = event.request.headers.get("host");

        let subdomain: string | null = null;

        if (host) {
                // split host into parts (for example: "edu.oreohive.org" becomes ["edu", "oreohive", "org"])
                const host_parts = host.split(".");

                // if there"re more than two parts, assume the first part is subdomain
                if (host_parts.length > 2) {
                        subdomain = host_parts[0];
                }
        }

        // store subdomain in locals so pages and endpoints can access it
        event.locals.subdomain = subdomain;

        // server (this hooks.server.ts) checks for accepted_terms cookie
        const terms_accepted = event.cookies.get("accepted_terms");

        // allow access to onboarding page, api routes, static assets and edu resources
        const publicPaths = [
                "/onboarding",
                "/api",
                "/global.css",
                "/app.css",
                "/edu",
                "/thegoodinternet",
                "/robots.txt",
                "/robot.txt",
                "/llms.txt",
                "/llm.txt",
                "/sitemap.xml",
        ];

        // if they haven't accepted and are not hitting a public path
        if (!terms_accepted && !publicPaths.some(p => event.url.pathname.startsWith(p))) {
                return new Response(null, {
                        status: 303,
                        headers: {
                                location: `/onboarding?redirect=${encodeURIComponent(event.url.pathname)}`
                        }
                });
        }

        const response = await resolve(event);

        if (response.status === 404) {
                return new Response(null, {
                        status: 303,
                        headers: {location: "/error-pages/404"} // i"m sure there"s a better way to do this lmao please help me out here
                });
        }

        return response;
};
