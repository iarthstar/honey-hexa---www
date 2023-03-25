import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  AboutSection,
  FooterSection,
  HeroSection,
  ServicesSection,
  WorkSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import {
  ABOUT_PROPS,
  HERO_PROPS,
  SERVICES_PROPS,
  WORKS_PROPS,
} from "@/content/home";
import { Rubik } from "next/font/google";
import { METADATA_HOME } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = { ...METADATA_HOME };

export default function HomePage() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <HeroSection {...HERO_PROPS} />
        <AboutSection {...ABOUT_PROPS} />
        <ServicesSection {...SERVICES_PROPS} />
        <WorkSection {...WORKS_PROPS} />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
