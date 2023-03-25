import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
  WorkSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { WORKS_PROPS } from "@/content/work";
import { Rubik } from "next/font/google";
import { METADATA_WORK } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = { ...METADATA_WORK };

export default function PageWork() {
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
