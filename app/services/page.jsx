import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FooterSection, ServicesSection } from "@/components/misc";
import { Page } from "@/components/page";
import { SERVICES_PROPS } from "@/content/services";
import { Rubik } from "next/font/google";
import { METADATA_SERVICES } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = { ...METADATA_SERVICES };

export default function PageServices() {
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
