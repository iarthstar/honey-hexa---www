import { ORIGIN } from "@/constants";
import { AREAS, SERVICES } from "@/content/shared";
import { getArticleSlugs } from "@/sanity/sanity";
import type { MetadataRoute } from "next";

const route = (path?: string, lastModified?: string) => ({
  url: `${ORIGIN}/${path ?? ""}`,
  lastModified: lastModified ?? new Date().toISOString(),
});

const areaList = Object.keys(AREAS);

const ahmedabadSlugs = SERVICES.map((o) => [
  ...areaList.map((v) => route(`ahmedabad/${o.value}-experts-${v}-ahmedabad`)),
]).flat();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleSlugs = (await getArticleSlugs()).map((o: any) =>
    route(`blog/${o.slug}`, o._updatedAt)
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
    ...ahmedabadSlugs,
  ];
}
