import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";
import { METADATA_CONTACT } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = { ...METADATA_CONTACT };

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
