import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Page404() {
  return (
    <Page className={rubik.className}>
      <Header />
      {/* TODO: Page not found view */}
      <FooterSection />
      <Footer />
    </Page>
  );
}
