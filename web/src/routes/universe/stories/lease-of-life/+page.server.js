// web/src/routes/universe/stories/lease-of-life/+page.server.js

import { error } from "@sveltejs/kit";
import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });
  const documents = await client.getAllByType("chapter", {
    orderings: [
      { field: "my.chapter.chapter_number", direction: "asc" }
    ]
  });

  if (documents) {
    return { documents };
  }

  error(404, "oop! not found");
}