// web/src/routes/universe/stories/lease-of-life/+page.server.js
import { error } from "@sveltejs/kit";
import { createClient, predicate, getRepositoryEndpoint } from "@prismicio/client";

export async function load({ fetch, request }) {
  // get repo endpoint using repo name
  const endpoint = getRepositoryEndpoint("oreohive");

  const client = createClient(endpoint, { fetch });

  // build a url object from the incoming request
  const url = new URL(request.url);

  // use a query parameter for story
  const story = url.searchParams.get("story") || "";

  // fetch all chapters matching this story field!
  const chapters = await client.getAllByType("chapter", {
    predicates: [predicate.at("my.chapter.story", story)]
  });

  if (chapters && chapters.length > 0) {
    return { chapters };
  }

  error(404, `No chapters found for story: ${story}`);
}
