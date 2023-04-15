import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/misc";
import { Page } from "@/components/page";
import { Rubik } from "next/font/google";
import { Unbounded } from "next/font/google";

import { allPosts } from "contentlayer/generated";
import { PageContainer } from "@/components/page-container";
import { SectionHeading } from "@/components/misc";
import { METADATA_BLOG } from "@/content/misc";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata = { ...METADATA_BLOG };

export default function PageBlog() {
  return (
    <Page className={rubik.className}>
      <Header />
      <main>
        <PageContainer>
          <SectionHeading heading="Blog" />
          <div className="bg-black border-white border p-4 md:p-24 flex flex-col gap-y-8">
            {allPosts.map((w) => (
              <Link
                key={w._raw.flattenedPath}
                href={`/blog/${w._raw.flattenedPath}`}
                className={`${unbounded.className} text-2xl border-b py-8`}
              >
                {w.title}
              </Link>
            ))}
          </div>
        </PageContainer>
      </main>
      <FooterSection />
      <Footer />
    </Page>
  );
}
