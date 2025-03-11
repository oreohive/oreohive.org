// src/routes/activity-log/[uid]/+page.server.ts

import { createClient } from "$lib/prismicio";
export const prerender = false;
export const ssr = true
export async function load({ params, fetch, cookies }) {

  console.log("params.uid:", params.uid); // temp: to inspect params.uid

  const client = createClient({ fetch, cookies });

  const page = await client.getByUID("post", params.uid);

  console.log("page:", page); // temp: to inspect page object

  return {
    page,
  };
}

export async function entries() {
  const client = createClient();

  const pages = await client.getAllByType("post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}