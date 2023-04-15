import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  FooterSection,
} from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";

import { allPosts } from 'contentlayer/generated'

const rubik = Rubik({ subsets: ["latin"] });

export default function PageBlog() {
  return (
    <Page className={rubik.className}>
      <Header />
      {/* TODO: Page not found view */}
      {allPosts.map((post, idx) => (
        <>{post.title}</>
      ))}
      <FooterSection />
      <Footer />
    </Page>
  );
}
