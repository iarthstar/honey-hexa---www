import { PageContainer } from '@/components/misc';
import { FileTextIcon, WidthIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'
import Page from '@/components/templates/page';
import { SOLUTIONS } from '@/content/shared';
import HeroHeadline from '@/components/molecules/hero-headline';


const PageSolutions = async () => {
  return (
    <Page>

      {/* BODY */}
      <HeroHeadline
        label={<><WidthIcon className="w-4 h-4" /> END TO END</>}
        title={<>our solutions&nbsp;</>}
        description={<>We deliver comprehensive, custom-built solutions that cover every phase of your project, from initial concept through to final delivery and beyond.</>}
      />
      <div className="py-16 bg-black text-white">
        <PageContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((o, i) => (
            <Link href="/contact" key={i} className="bg-neutral-900 h-64 rounded-[2rem] p-8 flex flex-col">
              <span className="flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-900 rounded-full px-3 py-2 text-xs uppercase w-fit"><FileTextIcon className="w-4 h-4" /> {o.category}</span>
              <span className="flex-grow" />
              <span className="text-lg font-semibold pb-4">{o.label}</span>
              <span className="text-sm text-neutral-400">Learn more</span>
            </Link>
          ))}
        </PageContainer>
      </div>

    </Page>
  )
}

export default PageSolutions;