import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
  WorkSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { WORKS_PROPS } from "@/content/work";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <WorkSection {...WORKS_PROPS} />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
