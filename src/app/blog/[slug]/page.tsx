import { Text } from '@/components/atoms/text';
import { PageContainer } from '@/components/misc';
import Page from '@/components/templates/page';
import { ORIGIN } from '@/constants';
import { getArticleFromSlug } from '@/sanity/sanity';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Metadata, ResolvingMetadata } from 'next';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {

  // fetch data
  const article = await getArticleFromSlug(params.slug);

  return {
    title: article.title,
    metadataBase: new URL(ORIGIN),
    openGraph: {
      images: ['/og-image.png'],
    },
  }
}

const PageArticle = async ({ params }: { params: { slug: string } }) => {
  let article = null;
  try {
    article = await getArticleFromSlug(params.slug);
  } catch (err) {

  }

  if (!article) {
    notFound();
  }

  return (
    <Page>
      <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
        <PageContainer className="flex flex-col justify-center items-left h-96 max-w-xl pr-8 gap-2">
          <Link href="/blog" className="w-fit flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 tracking-wide rounded-full px-3 py-2 text-xs shadow-xl uppercase"><ArrowLeftIcon className="w-4 h-4" /> Blog</Link>
          <Text as="h1" size="5xl" className="text-left font-black tracking-tight uppercase leading-tighter bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text drop-shadow-xl w-fit">{article.title}&nbsp;</Text>
        </PageContainer>
      </div>
      <div className="flex flex-col">
        <div className="border-b border-b-slate-500 w-full m-auto max-w-xl text-white leading-relaxed px-4 py-16 flex flex-col gap-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-12 [&>p]:text-md [&>p]:font-normal [&>p]:text-neutral-300 [&>ul>li]:list-disc [&>ul>li]:ml-4 [&>ul>li]:pl-1 [&>ul>li]:mb-2">
          <PortableText value={article.body} />
        </div>
        <div className="w-full m-auto max-w-xl px-4 text-white py-16">
          {article.author.name}
        </div>
      </div>

    </Page>
  )
}

export default PageArticle