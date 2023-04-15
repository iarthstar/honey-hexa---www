import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";

import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { PageContainer } from "@/components/page-container";
import { SectionHeading } from "@/components/misc";
import styles from "./page.module.scss";

const rubik = Rubik({ subsets: ["latin"] });

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function PageBlog({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug.toLowerCase());
  const Content = getMDXComponent(post.body.code);

  return (
    <Page className={rubik.className}>
      <Header />
      <PageContainer>
        <SectionHeading heading={post.title} />
        <div className={styles.content}>
          <Content />
        </div>
      </PageContainer>
      <FooterSection />
      <Footer />
    </Page>
  );
}
