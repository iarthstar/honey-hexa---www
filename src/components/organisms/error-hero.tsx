import React from 'react'
import { PageContainer } from '@/components/misc';
import Marquee from '@/components/molecules/marquee';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Text } from '@/components/atoms/text';

const marqueeItems = new Array(10).fill(0).map((o, i) => i);

const ErrorHero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
      <PageContainer className="flex flex-col justify-center items-center h-96 mt-32 mb-24">
        <Text as="h1" size="8xl" className="text-white font-black text-center uppercase tracking-tighter drop-shadow-lg">OOPS<br /><span className="text-blue-300">SERVER ERROR</span></Text>
        <Text as="p" size="base" className="text-white text-center mt-4 max-w-2xl drop-shadow-md">Please try again later</Text>
        <div className="mt-12">
        <Link href="/" className="drop-shadow-md bg-white text-blue-900 px-4 py-2 rounded-full text-base font-semibold flex flex-row items-center">Go back home &nbsp; <ArrowRightIcon /></Link>
        </div>
      </PageContainer>
        <Marquee items={marqueeItems} view={() => <div className="text-white uppercase text-4xl font-black tracking-tighter px-24 py-12">500</div>} />
    </div>
  )
}

export default ErrorHero;