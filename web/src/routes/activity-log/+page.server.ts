// src/routes/activity-log/+page.server.ts

import { createClient } from "$lib/prismicio";

export const prerender = false;

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  const posts = await client.getAllByType("post", {orderings: "[my.post.date desc]"});

  console.log("posts:", posts); // temp: to inspect posts object

  return {
    posts,
  };
}