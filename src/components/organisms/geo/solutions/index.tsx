import React from 'react'
import { PageContainer } from '@/components/misc';
import Headline from '@/components/molecules/headline';
import { BarChartIcon, CheckCircledIcon, MagicWandIcon, MixIcon, } from '@radix-ui/react-icons';
import Link from 'next/link';
import PhoneArrowUpRight from '../../../icons/phone-arrow-up-right';

const EXPERTISE_SECTORS = [
  {
    icon: <MagicWandIcon className="h-6 w-6 text-pink-600" />,
    title: "AI-Native Innovation",
    description: "AI-driven automation, prediction, and optimization for every stage of your digital strategy.",
  },
  {
    icon: <MixIcon className="h-6 w-6 text-amber-600" />,
    title: "Custom Solutions",
    description: "Tailored digital solutions that are purpose-built for the unique challenges of your business.",
  },
  {
    icon: <CheckCircledIcon className="h-6 w-6 text-green-600" />,
    title: "Proven Expertise",
    description: "A trusted partner with 10+ years of expertise in scaling zero to one & enterprise businesses.",
  },
  {
    icon: <BarChartIcon className="h-6 w-6 text-indigo-600" />,
    title: "Data-Driven Decisions",
    description: "Harness powerful analytics for deep insights and decisions that drive measurable growth.",
  }
]

const GeoSolutions = ({ service = "", area = ""}) => {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black flex flex-col items-center bg-black text-white py-32">
      <Headline
        className=""
        label={area}
        title="Why choose us"
        description={`For 10+ years, we’ve partnered with enterprise clients. Our AI-First ${service} ensure you not only keep pace with the ever-evolving digital landscape but lead the charge.`}
      />
      <Link href="/contact" className="mt-8 shadow-md bg-black hover:bg-white border border-white/20 flex flex-row items-center text-sm text-white hover:text-black font-medium px-4 py-2 rounded-full">Book Free Consulting Now &nbsp; <PhoneArrowUpRight /></Link>

      <PageContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16">
        {EXPERTISE_SECTORS.map((o, i) => (
          <div key={i} className="border border-neutral-800 bg-black hover:bg-neutral-900 p-6 flex flex-col">
            {o.icon}
            <span className="text-lg font-semibold py-4 mt-4">{o.title}</span>
            <span className="text-sm text-neutral-400 text-pretty">{o.description}</span>
            <span className="flex-grow" />
          </div>
        ))}

      </PageContainer>
    </div>
  )
}

export default GeoSolutions;