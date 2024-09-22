import { PageContainer } from '@/components/misc';
import { getArticles } from '@/sanity/sanity';
import { FileTextIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'
import { format } from "date-fns";
import Page from '@/components/templates/page';
import HeroHeadline from '@/components/molecules/hero-headline';

const formatArticleDate = (date: string) => format(new Date(date), 'MMM dd, yyyy');

const PageBlog = async () => {
  const articles: any[] = await getArticles();
  return (
    <Page>

      {/* BODY */}
      <HeroHeadline
        label={<><FileTextIcon className="w-4 h-4" /> Blog</>}
        title={<>our insightful articles&nbsp;</>}
        description={<>Discover the latest in AI-driven strategies, cutting-edge technology, and innovative solutions designed to elevate your business to new heights.</>}
      />
      <div className="bg-black">
        <PageContainer className="text-white grid grid-cols-1 gap-0 pt-8">
          {/* Listing of articles */}
          {articles.map((o, i) => (
            <Link href={`/blog/${o.slug}`} className="border-b border-b-zinc-800 group hover:border-b-zinc-500 flex flex-col md:flex-row gap-y-2 justify-between items-center transition-all duration-150 bg-black hover:shadow-2xl hover:bg-neutral-900 w-full py-6 px-6" key={i}>
              <h3 className="text-white text-regular font-md group-hover:underline-offset-4 group-hover:underline group-hover:decoration-1">{o.title}</h3>
              <div className="flex flex-row items-center gap-2">
                {/* AUTHOR AVATAR */}
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
                <div className="text-white/80 text-sm mr-4">{o.author.name}</div>
                <div className="text-white/80 font-mono text-thin text-sm">{formatArticleDate(o.publishedAt)}</div>
              </div>
            </Link>
          ))}
        </PageContainer>
      </div>

    </Page>
  )
}

export default PageBlog;