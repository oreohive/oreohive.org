import { redirect } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
    accept: async ({ cookies, url }) => {
        // set the accepted_terms cookie (valid for one week)
        cookies.set("accepted_terms", "true", {
            path: "/",
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7 // one week
        });
        console.log("cookie set!");

        // extract the redirect path from the query parameter
        const redirectTo = url.searchParams.get("redirect") || '/';

        // redirect to the specified path or home if not specified
        throw redirect(303, redirectTo);
    }
};