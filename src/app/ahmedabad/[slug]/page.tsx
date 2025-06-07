import Page from "@/components/templates/page";
import GeoServices from "@/components/organisms/geo/services";
import GeoSolutions from "@/components/organisms/geo/solutions";
import GeoHero from "@/components/organisms/geo/hero";
import { notFound } from "next/navigation";
import { AREAS, SERVICES } from "@/content/shared";

const GeoCityAreaSericePage: React.FC<any> = async ({ params }) => {
  let service = null;
  let area = null;
  const slug = (await params)?.slug;

  const regex = new RegExp(/^(\w+)-(\w+)-experts-(\w+)-ahmedabad$/);

  if (!regex.test(slug)) {
    notFound();
  }

  const executed = regex.exec(slug);

  if (executed === null) {
    notFound();
  } else {
    const [_slug, group1, group2, group3] = executed;
    service = SERVICES.find(
      (o) => o.value == `${group1}-${group2}`.toLowerCase()
    )?.label;
    area = AREAS[`${group3}`.toLowerCase()];
  }

  if (!service || !area) {
    notFound();
  }

  return (
    <Page headerProps={{ hideNavigation: true }}>
      <GeoHero service={service} area={area} />
      <GeoServices service={service} area={area} />
      <GeoSolutions service={service} area={area} />
    </Page>
  );
};

export default GeoCityAreaSericePage;
