import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  AboutSection,
  FooterSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { ABOUT_PROPS } from "@/content/about";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <AboutSection {...ABOUT_PROPS} />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
