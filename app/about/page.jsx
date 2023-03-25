import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutSection, FooterSection, SectionHeading } from "@/components/misc";
import { Page } from "@/components/page";
import { PageContainer } from "@/components/page-container";
import { ABOUT_PROPS } from "@/content/about";
import { Rubik } from "next/font/google";
import { METADATA_ABOUT } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = { ...METADATA_ABOUT };

export default function PageAbout() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <PageContainer>
          <SectionHeading heading="About Us" />
        </PageContainer>
        <AboutSection {...ABOUT_PROPS} />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
