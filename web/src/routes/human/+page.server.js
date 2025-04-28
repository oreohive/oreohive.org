// web/src/routes/human/human-articles/+page.server.js

import { error } from "@sveltejs/kit";
import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch });
  const documents = await client.getAllByType("humanArticle");

  if (documents) {
    // sort docs array based on "date" field
    const sortedDocuments = documents.sort((a, b) => {
      const dateA = a.data.date ?? "";
      const dateB = b.data.date ?? "";

      // compare dates, return
      // 1 if dateA is earlier than dateB
      // -1 if dateA is later than dateB
      // 0 if they are equal
      // flipped values for reverse
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    });

    return { documents: sortedDocuments };
  }

  if (documents) {
    return { documents };
  }

  error(404, "oop! not found");
}