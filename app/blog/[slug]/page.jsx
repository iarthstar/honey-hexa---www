import { Rubik } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/misc";
import { Page } from "@/components/page";

import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { PageContainer } from "@/components/page-container";
import { SectionHeading } from "@/components/misc";
import { addToOrigin } from "@/content/misc";
import styles from "./page.module.scss";

const rubik = Rubik({ subsets: ["latin"] });

function getPostFromParams(params) {
  const slug = params.slug.toLowerCase();
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    null;
  }

  return post;
}

export function generateMetadata({ params }) {
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogUrl = addToOrigin("/meta/honey_hexa_og.png");

  const title = post?.title ?? "";
  const description = post?.description ?? "";
  const authors = post?.authors ?? [];
  const url = addToOrigin(`/blog${post?._raw?.flattenedPath}`);

  return {
    title,
    description,
    authors: authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function PageBlog({ params }) {
  const post = getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <Page className={rubik.className}>
      <Header />
      <article>
        <PageContainer>
          <SectionHeading heading={post.title} />
          <div className={styles.content}>
            <Content />
          </div>
        </PageContainer>
      </article>
      <FooterSection />
      <Footer />
    </Page>
  );
}
