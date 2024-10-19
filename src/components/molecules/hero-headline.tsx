import React from 'react'
import { PageContainer } from '@/components/misc'
import { Text } from '@/components/atoms/text'

const HeroHeadline = ({ label, title, description }: any) => {
  return (
    <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-b border-b-slate-500 border-0 rounded-b-[4rem] overflow-hidden">
      <PageContainer className="flex flex-col justify-center items-center h-96">
        {label && <Text as="span" size="xs" className="flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 tracking-wide rounded-full px-3 py-2 shadow-xl uppercase">{label}</Text>}
        {title && <Text as="h1" size="6xl" className="text-center font-black tracking-tighter uppercase !leading-[120%] bg-gradient-to-r from-white from-[30%] to-blue-200 text-transparent bg-clip-text drop-shadow-2xl w-fit">{title}</Text>}
        {description && <Text as="p" size="base" className="text-neutral-100 text-center mt-2 max-w-2xl drop-shadow-md">{description}</Text>}
      </PageContainer>
    </div>
  )
}

export default HeroHeadline;