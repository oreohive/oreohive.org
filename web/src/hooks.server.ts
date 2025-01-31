// src/hooks.server.ts

import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	// server (hooks.server.ts) checks for accepted_terms cookie
	const terms_accepted = event.cookies.get("accepted_terms");

	// allow access to onboarding page and api routes
	if (event.url.pathname === "/onboarding" || event.url.pathname.startsWith("/api")) {
		return resolve(event);
	}

	// if terms not accepted, redirect to onboarding
	if (!terms_accepted) {
		return new Response(null, {
			status: 303,
			headers: { location: "/onboarding" }
		});
	}

	return resolve(event);
}