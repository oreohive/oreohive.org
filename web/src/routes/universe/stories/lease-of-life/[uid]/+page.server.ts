// src/routes/universe/stories/lease-of-life/[uid]/+page.server.ts

import { createClient } from "$lib/prismicio";

export async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  const page = await client.getByUID("chapter", params.uid);

  return {
    page,
  };
}

export async function entries() {
  const client = createClient();

  const pages = await client.getAllByType("chapter");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}