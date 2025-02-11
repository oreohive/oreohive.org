import { redirect } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
	accept: async ({ cookies }) => {
		// set the accepted_terms cookie (valid for one week)
		cookies.set("accepted_terms", "true", {
			path: "/",
			httpOnly: true,
			secure: true,
			maxAge: 60 * 60 * 24 * 7 // one week
		
		});
	console.log("cookie set!");

	// redirect to home
	throw redirect(303, "/");
	}
};