/* src/routes/source-license/+page.server.js */

import {redirect} from "@sveltejs/kit";

export function load() {
  redirect(308, "https://github.com/oreohive/source/blob/main/LICENSE");
}
