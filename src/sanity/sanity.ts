// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getArticles() {
  const articles = await client.fetch(
    '*[_type == "article"]{ title, "slug": slug.current, author -> { name }, publishedAt } | order(publishedAt desc)'
  );
  return articles;
}

export async function getArticleFromSlug(slug: string) {
  const article = await client.fetch(
    `*[_type == "article" && slug.current == "${slug}"]{ ..., author -> { name }}[0]`
  );
  return article;
}

export async function getArticleSlugs() {
  const articles = await client.fetch(
    '*[_type == "article"]{  "slug": slug.current, _updatedAt }'
  );
  return articles;
}
