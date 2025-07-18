// src/hooks.server.ts

import type { Handle } from '@sveltejs/kit';

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

                // if there're more than two parts, assume the first part is subdomain
                if (host_parts.length > 2) {
                        subdomain = host_parts[0];
                }
        }

        // store subdomain in locals so pages and endpoints can access it
        event.locals.subdomain = subdomain;

        // server (this hooks.server.ts) checks for accepted_terms cookie
        const terms_accepted = event.cookies.get("accepted_terms");

        // allow access to onboarding page, api routes, static assets and edu resources
        if (
                event.url.pathname.startsWith("/onboarding") ||
                event.url.pathname.startsWith("/api") ||
                event.url.pathname.startsWith("/global.css") ||
                event.url.pathname.startsWith("/app.css") ||
                event.url.pathname.startsWith("/edu") || // allow access to edu resources
                event.url.pathname.startsWith("/thegoodinternet") || // allow access to edu resources

                event.url.pathname.startsWith("/robots.txt") ||
                event.url.pathname.startsWith("/llms.txt") ||
                event.url.pathname.startsWith("/sitemap.xmp")
        ) {
                return resolve(event);
        }

        const response = await resolve(event);

        if (response.status === 404) {
                return new Response(null, {
                        status: 303,
                        headers: {location: "/error-pages/404"} // i'm sure there's a better way to do this lmao please help me out here
                });
        }

        return response;
};