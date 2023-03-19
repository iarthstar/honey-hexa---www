import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
  ServicesSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { SERVICES_PROPS } from "@/content/services";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <ServicesSection {...SERVICES_PROPS} />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
