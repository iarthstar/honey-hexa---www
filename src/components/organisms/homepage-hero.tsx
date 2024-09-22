import React from 'react'
import { PageContainer } from '@/components/misc';
import PhoneArrowUpRight from '@/components/icons/phone-arrow-up-right';
import Link from 'next/link';
import { Text } from '@/components/atoms/text';
import Marquee from '@/components/molecules/marquee';
import RocketLaunch from '../icons/rocket-launch';

const marqueeItems = [
  { label: "NETRA CONSTRUCTIONS" },
  { label: "AJK MASALA" },
  { label: "HARSHID ENGRAVERS" },
  { label: "KUBER CREATIONS" },
  { label: "SERP ONE" },
  { label: "PARAMHANSA VALUES" },
  { label: "SCRIPT BAZAAR" },
]

const HomepageHero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
      <PageContainer className="flex flex-col justify-center items-center h-96 sm:mt-32 sm:mb-24">
        {/* <div className="-mr-8 flex flex-row items-center justify-center">
          <div className="flex flex-row">
            {[1, 2, 3, 4, 5].map((o, i) => <div key={i} style={{ zIndex: i }} className="shadow-2xl border border-2 border-black bg-blue-300 h-6 w-6 sm:h-10 sm:w-10 rounded-full -mr-2 sm:-mr-4"></div>)}
          </div>
          <div className="flex flex-col ml-4 sm:ml-6">
            <div className="flex flex-row">
              {[1, 2, 3, 4, 5].map((o, i) => <StarFilledIcon key={i} style={{ zIndex: i }} className="shadow-xl text-yellow-500 h-2 w-2 sm:h-4 sm:w-4" />)}
            </div>
            <div className="text-white text-[0.5rem] sm:text-xs mt-1">helped businesses worldwide</div>
          </div>
        </div> */}
        <Text as="span" size="xs" className="flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 tracking-wide rounded-full px-3 py-2 shadow-xl uppercase"><RocketLaunch />GROW 10X</Text>
        <Text as="h1" size="8xl" className="bg-gradient-to-r from-white from-[30%] to-neutral-300 text-transparent bg-clip-text font-black text-center uppercase tracking-tighter drop-shadow-lg">Your Partner in <br /><span className="bg-gradient-to-r from-blue-200 from-[30%] to-blue-400 text-transparent bg-clip-text">Digital Universe</span></Text>
        <Text as="p" size="md" className="text-white text-center mt-4 max-w-2xl drop-shadow-lg">We leverage AI-First strategies and cutting edge tech-stack to craft purpose-built solutions that scale your business from zero to hero.</Text>
        <div className="mt-12">
          <Link href="/contact" className="drop-shadow-lg bg-white text-blue-900 px-4 py-2 rounded-full text-regular font-semibold flex flex-row items-center">Book Now &nbsp; <PhoneArrowUpRight /></Link>
        </div>
      </PageContainer>
      <Marquee items={marqueeItems} view={(o: any) => <div className="text-white drop-shadow-lg uppercase text-3xl font-bold tracking-tighter px-24 py-12">{o.label}</div>} />
    </div>
  )
}

export default HomepageHero;