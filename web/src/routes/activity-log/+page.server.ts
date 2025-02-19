// src/routes/activity-log/+page.server.ts

import { createClient } from "$lib/prismicio";

export const prerender = false;

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  const posts = await client.getAllByType("post", {
    
    orderings: [
      { field: "my.post.date", direction: "desc" }
    ]
  
  });

  console.log("posts:", posts); // can be considered temp: to inspect posts object

  return {
    posts,
  };
}