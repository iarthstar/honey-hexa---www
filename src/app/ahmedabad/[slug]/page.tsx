import Page from "@/components/templates/page";
import GeoServices from "@/components/organisms/geo/services";
import GeoSolutions from "@/components/organisms/geo/solutions";
import GeoHero from "@/components/organisms/geo/hero";
import { notFound } from "next/navigation";
import { AREAS, SERVICES } from "@/content/shared";
import { ORIGIN } from "@/constants";
import { Metadata, ResolvingMetadata } from "next";

const DEFAULT_METADATA = {
  title: "Honey Hexa - Your Partner in Digital Universe",
  description:
    "We leverage AI-First strategies and cutting edge tech-stack to craft purpose-built solutions that scale your business from zero to hero.",
  metadataBase: new URL(ORIGIN),
  openGraph: {
    images: ["/og-image.png"],
  },
};

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let service = null;
  let area = null;
  const slug = (await params)?.slug;

  const regex = new RegExp(/^(\w+)-(\w+)-experts-(\w+)-ahmedabad$/);

  if (!regex.test(slug)) {
    return DEFAULT_METADATA;
  }

  const executed = regex.exec(slug);

  if (executed === null) {
    return DEFAULT_METADATA;
  } else {
    const [_slug, group1, group2, group3] = executed;
    service = SERVICES.find(
      (o) => o.value == `${group1}-${group2}`.toLowerCase()
    )?.label;
    area = AREAS[`${group3}`.toLowerCase()];
  }

  if (!service || !area) {
    return DEFAULT_METADATA;
  }

  return {
    title: `Best ${service} for ${area} - Ahmedabad Businesses`,
    description: `As ${area}'s premier ${service} provider, we understand the unique needs of our community. Our team delivers AI-Native ${service} for businesses in ${area} ahmedabad.`,
    metadataBase: new URL(ORIGIN),
    alternates: {
      canonical: `${ORIGIN}/ahmedabad/${(await (await params)?.slug)}`
    },
    openGraph: {
      images: ["/og-image.png"],
    },
  };
}

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
