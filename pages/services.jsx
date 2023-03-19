import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
  ServicesSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <ServicesSection />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
