import React from 'react'
import { PageContainer } from '@/components/misc';
import Headline from '@/components/molecules/headline';
import { CodeIcon, RocketIcon, StarIcon, TransformIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import PhoneArrowUpRight from '../icons/phone-arrow-up-right';

const EXPERTISE_SECTORS = [
  {
    icon: <StarIcon className="h-6 w-6 text-amber-600" />,
    title: "Brand & Identity",
    description: "Our AI-First approach crafts resonant brand experiences through strategy-driven identity design.",
  },
  {
    icon: <TransformIcon className="h-6 w-6 text-fuchsia-600" />,
    title: "Design",
    description: "AI-powered design creates intuitive interfaces that engage users and convert customers.",
  },
  {
    icon: <CodeIcon className="h-6 w-6 text-blue-600" />,
    title: "Development",
    description: "AI-enhanced development builds scalable digital platforms tailored to business needs.",
  },
  {
    icon: <RocketIcon className="h-6 w-6 text-emerald-600" />,
    title: "Growth",
    description: "AI-First growth solutions leverage data insights and automation to outpace competitors.",
  }
]

const HomepageServices = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white py-32">
      <Headline
        className=""
        label="AI First"
        title="Our expertise"
        description="From elevating brands to developing bespoke digital experiences, we harness the power of AI to ensure your business thrives in today’s fast-paced, tech-driven landscape."
      />
      <Link href="/contact" className="mt-8 shadow-xl bg-black hover:bg-white border border-white/20 flex flex-row items-center text-sm text-white hover:text-black font-medium px-4 py-2 rounded-full">Book Free Consulting Now &nbsp; <PhoneArrowUpRight /></Link>

      <PageContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-16">
        {EXPERTISE_SECTORS.map((o, i) => (
          <div key={i} className="border border-neutral-800 bg-black hover:bg-neutral-900 p-6 flex flex-col">
            {o.icon}
            <span className="text-lg font-semibold py-4 mt-4">{o.title}</span>
            <span className="text-sm text-neutral-400 text-pretty">{o.description}</span>
            <span className="flex-grow" />
          </div>
        ))}

      </PageContainer>
      {/* <PageContainer className="pb-32">
        <video
          className="pointer-events-none aspect-4/3 h-full w-full object-cover object-top"
          src="https://v.bentogrids.com/clsyjr8rv0003mrg3wpymvi3d.mp4"
          preload="auto"
          autoPlay
          loop
          muted
        />
      </PageContainer> */}
    </div>
  )
}

export default HomepageServices;