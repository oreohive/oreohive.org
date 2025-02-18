// web/src/routes/human/human-articles/+page.server.js

import { error } from "@sveltejs/kit";
import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });
  const documents = await client.getAllByType("humanArticle");

  if (documents) {
    return { documents };
  }

  error(404, "oop! not found");
}