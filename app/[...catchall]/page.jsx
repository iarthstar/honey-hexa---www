import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";
import { METADATA_NOT_FOUND } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = { ...METADATA_NOT_FOUND };

export default function PageContact() {
  return (
    <Page className={rubik.className}>
      <Header />
      {/* TODO: Page not found view */}
      <FooterSection />
      <Footer />
    </Page>
  );
}
