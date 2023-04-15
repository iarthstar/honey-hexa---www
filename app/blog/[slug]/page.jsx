import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";

import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks'

const rubik = Rubik({ subsets: ["latin"] });

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export default function PageBlog({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const Content = getMDXComponent(post.body.code);

  return (
    <Page className={rubik.className}>
      <Header />
      {/* TODO: Page not found view */}
      {allPosts.map((post, idx) => (
        <>{post.title}</>
      ))}
      <Content />
      <FooterSection />
      <Footer />
    </Page>
  );
}
