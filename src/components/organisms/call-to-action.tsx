import React from 'react'
import { PageContainer } from '@/components/misc';
import PhoneArrowUpRight from '@/components/icons/phone-arrow-up-right';
import { Text } from '@/components/atoms/text';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <>
      <div className="w-full h-36"></div>
      <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
        <PageContainer className="flex flex-col justify-center items-center h-96">
          <Text as="h3" size="6xl" className="text-white font-black text-center uppercase tracking-tighter drop-shadow-lg">Your Vision<br /><span className="text-blue-300">Our Expertise</span></Text>
          <Text as="p" size="base" className="text-white text-center mt-4 max-w-xs sm:max-w-2xl drop-shadow-md">Infinite possibilities await with our expert team at your service.</Text>
          <div className="mt-8">
          <Link href="/contact" className="drop-shadow-md bg-white text-blue-900 px-4 py-2 rounded-full text-regular font-semibold flex flex-row items-center">Book Free Consulting Now &nbsp; <PhoneArrowUpRight /></Link>
          </div>
        </PageContainer>
      </div>
    </>
  )
}

export default CallToAction;