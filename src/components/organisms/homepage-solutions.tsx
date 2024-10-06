import React from 'react'
import { PageContainer } from '@/components/misc';
import Headline from '@/components/molecules/headline';
import { BarChartIcon, CheckCircledIcon, MagicWandIcon, MixIcon, } from '@radix-ui/react-icons';

const EXPERTISE_SECTORS = [
  {
    icon: <MagicWandIcon className="h-12 w-12 text-pink-600" />,
    title: "AI-Powered Innovation",
    description: "Using AI to automate, predict, and optimize every stage of your digital strategy.",
  },
  {
    icon: <MixIcon className="h-12 w-12 text-amber-600" />,
    title: "Custom, Purpose-Built Solutions",
    description: "Tailored digital solutions that address the unique challenges of your business.",
  },
  {
    icon: <CheckCircledIcon className="h-12 w-12 text-green-600" />,
    title: "Proven Expertise",
    description: "A trusted partner with over a decade of experience in helping enterprise businesses scale and succeed.",
  },
  {
    icon: <BarChartIcon className="h-12 w-12 text-indigo-600" />,
    title: "Data-Driven Decision Making",
    description: "Leverage powerful analytics to gain deep insights and make smarter, faster decisions that drive measurable growth.",
  }
]

const HomepageSolutions = () => {
  return (
    <div className="bg-black text-white">
      <Headline
        className="pt-32 pb-16"
        label="Partner"
        title="Why choose us"
        description="For 10+ years, we’ve partnered with enterprise clients. Our AI-First solutions ensure you not only keep pace with the ever-evolving digital landscape but lead the charge."
      />
      <PageContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {EXPERTISE_SECTORS.map((o, i) => (
          <div key={i} className="bg-gradient-to-br from-neutral-800 via-[30%] via-black to-black bg-black border hover:border-neutral-500 border-neutral-800 h-64 rounded-[0.66rem] p-8 flex flex-col">
            {o.icon}
            <span className="flex-grow" />
            <span className="text-lg font-semibold pb-4">{o.title}</span>
            <span className="text-sm text-neutral-400">{o.description}</span>
          </div>
        ))}

      </PageContainer>
      {/* <PageContainer className="pb-32">
        <video
          className="pointer-events-none aspect-4/3 h-full w-full object-cover object-top"
          src="https://v.bentogrids.com/clsyjr8fn0002mrg3q5igeryf.mp4"
          preload="auto"
          autoPlay
          loop
          muted
        />
      </PageContainer> */}
    </div>
  )
}

export default HomepageSolutions;