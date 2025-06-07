import Page from "@/components/templates/page";
import GeoServices from "@/components/organisms/geo/services";
import GeoSolutions from "@/components/organisms/geo/solutions";
import GeoHero from "@/components/organisms/geo/hero";
import { notFound } from "next/navigation";
import { ORIGIN } from "@/constants";
import { Metadata, ResolvingMetadata } from "next";
import { getServiceAndArea } from "@/utils/geo";
import FAQs from "@/components/organisms/faqs";

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
  const slug = (await params)?.slug;

  const { service, area } = getServiceAndArea(slug, () => DEFAULT_METADATA);

  return {
    title: `Best ${service} for ${area} - Ahmedabad Businesses`,
    description: `We are ${area}'s top ${service} provider, our team delivers AI-First ${service} for your business in ${area} ahmedabad.`,
    metadataBase: new URL(ORIGIN),
    alternates: {
      canonical: `${ORIGIN}/ahmedabad/${(await params)?.slug}`,
    },
    openGraph: {
      images: ["/og-image.png"],
    },
  };
}

const makeItems = (service: string, area: string) => ([
  {
    "q": `How does AI help my ${area} business grow?`,
    "a": `Boosts local sales with demand prediction, hyper-targeted ads, and ${area}-specific SEO content.`
  },
  {
    "q": `Why choose AI-Native Platforms over generic tools for ${service}?`,
    "a": `Trained on local data: understands your ${area}'s context, trends, and competitors.`
  },
  {
    "q": `Is AI hard for non-tech ${area} business owners?`,
    "a": `No-code setup for hyper-local ${area} businesses. Launch in 72 hours, no IT skills needed.`,
  },
  {
    "q": `Can you guarantee AI ROI for ${service}?`,
    "a": `90-day growth guarantee: ~20%+ improvements in workflows or free ${service} extension.`
  },
  {
    "q": `How do you protect our ${area} customers' data?`,
    "a": `AI-Safety with Indian data processing, automatic PII redaction, and DPDP Act compliance for ${area} businesses.`
  }
]);

const GeoCityAreaSericePage: React.FC<any> = async ({ params }) => {
  const slug = (await params)?.slug;
  const { service, area } = getServiceAndArea(slug, () => notFound());

  return (
    <Page headerProps={{ hideNavigation: true }}>
      <GeoHero service={service} area={area} />
      <GeoServices service={service} area={area} />
      <GeoSolutions service={service} area={area} />
      <FAQs items={makeItems(service, area)} />
    </Page>
  );
};

export default GeoCityAreaSericePage;
