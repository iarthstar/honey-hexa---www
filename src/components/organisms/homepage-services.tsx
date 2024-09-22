import React from 'react'
import { PageContainer } from '@/components/misc';
import Headline from '@/components/molecules/headline';
import { CodeIcon, RocketIcon, StarIcon, TransformIcon } from '@radix-ui/react-icons';

const EXPERTISE_SECTORS = [
  {
    icon: <StarIcon className="h-12 w-12 text-amber-600" />,
    title: "Brand & Identity",
    description: "Our AI-First approach ensures your brand resonates deeply with your target audience. We craft unforgettable brand experiences through strategy and identity design. ",
  },
  {
    icon: <TransformIcon className="h-12 w-12 text-fuchsia-600" />,
    title: "Design",
    description: "Our AI-powered design process ensures the creation of intuitive, data-driven user interfaces and experiences that engage users and convert visitors into loyal customers.",
  },
  {
    icon: <CodeIcon className="h-12 w-12 text-blue-600" />,
    title: "Development",
    description: "Our AI-enhanced development services enable businesses to create powerful, scalable, and efficient digital platforms that meet their unique needs.",
  },
  {
    icon: <RocketIcon className="h-12 w-12 text-emerald-600" />,
    title: "Growth",
    description: "Our AI-First growth solutions help you stay ahead of the competition by leveraging data-driven insights and marketing automation.",
  }
]

const HomepageServices = () => {
  return (
    <div className="bg-black text-white">
      <Headline
        className="pt-32 pb-16"
        label="AI First"
        title="Our expertise"
        description="From elevating brands to developing bespoke digital experiences, we harness the power of AI to ensure your business thrives in today’s fast-paced, tech-driven landscape."
      />
      <PageContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {EXPERTISE_SECTORS.map((o, i) => (
          <div key={i} className="bg-gradient-to-br from-neutral-800 via-[30%] via-black to-black bg-black border hover:border-neutral-500 border-neutral-800 h-64 rounded-[2rem] p-8 flex flex-col">
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