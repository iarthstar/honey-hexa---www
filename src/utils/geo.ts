import { AREAS, SERVICES } from "@/content/shared";

export const getServiceAndArea = (slug: string, reject: any) => {
  let service = null;
  let area = null;
  const REGEX = new RegExp(/^([a-z-]+)-experts-([a-z-]+)-ahmedabad$/);

  if (!REGEX.test(slug)) {
    return reject();
  }

  const executed = REGEX.exec(slug);

  if (executed === null) {
    return reject();
  } else {
    const [_slug, group1, group2] = executed;
    service = SERVICES.find((o) => o.value == group1.toLowerCase())?.label;
    area = AREAS[group2.toLowerCase()];
  }

  if (!service || !area) {
    return reject();
  }

  return { service, area };
};
