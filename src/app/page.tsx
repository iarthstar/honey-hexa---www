import Page from "@/components/templates/page";
import HomepageHero from "@/components/organisms/homepage-hero";
import HomepageServices from "@/components/organisms/homepage-services";
import HomepageSolutions from "@/components/organisms/homepage-solutions";

export default function Home() {
  return (
    <Page>
      <HomepageHero />
      <HomepageServices />
      <HomepageSolutions />
    </Page>
  );
}