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

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
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
