import { ORIGIN } from "@/constants";
import { getArticleSlugs } from "@/sanity/sanity";
import type { MetadataRoute } from "next";

const route = (path?: string, lastModified?: string) => ({
  url: `${ORIGIN}/${path ?? ""}`,
  lastModified: lastModified ?? new Date().toISOString(),
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleSlugs = (await getArticleSlugs()).map((o: any) =>
    route(o.slug, o._updatedAt)
  );
  return [
    route(),
    route("contact"),
    route("services"),
    route("solutions"),
    route("customers"),
    route("privacy"),
    route("terms"),

    route("blog"),
    ...articleSlugs,
  ];
}
