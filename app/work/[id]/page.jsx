import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FooterSection, WorkSection } from "@/components/misc";
import { Page } from "@/components/page";
import { WORKS_PROPS } from "@/content/work";
import { Rubik } from "next/font/google";
import { METADATA_WORK } from "@/content/misc";
import { PageContainer } from "@/components/page-container";
import { SectionHeading } from "@/components/misc";
import { WORKS } from "@/content/misc";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export function generateStaticParams() {
  const paths = []; // WORKS.map((o) => ({ id: o.path }));
  return paths;
}

function getWork(params) {
  const work = WORKS.find((o) => o.path === params?.id?.toLowerCase());
  return work;
}

export const metadata = { ...METADATA_WORK };

const WorkShowcase = ({ assets }) => (
  <PageContainer>
    <div className="backdrop-blur-xl bg-black border-white border p-4 md:p-24 flex flex-col gap-y-4 md:gap-y-24">
      {assets.map((imgUrl) => (
        <Image
          key={imgUrl}
          alt={imgUrl}
          src={imgUrl}
          width={1200}
          height={1200}
        />
      ))}
    </div>
  </PageContainer>
);

export default function PageWork({ params }) {
  const {
    content: { title = "", assets = [] },
  } = getWork(params);
  return (
    <Page className={rubik.className}>
      <Header />
      <main className={rubik.className}>
        <PageContainer>
          <SectionHeading heading={title} goBackUrl="/work" />
        </PageContainer>
        <WorkShowcase assets={assets} />
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
