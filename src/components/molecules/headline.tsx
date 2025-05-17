import React from 'react'
import { PageContainer } from '@/components/misc';
import { cn } from '@/utils';
import { Text } from '@/components/atoms/text';

const Headline: React.FC<React.HTMLAttributes<null> & { label?: string; title?: string; description?: string }> = ({ className, label = null, title = null, description = null }) => {
  return (
    <PageContainer className={cn("flex flex-col justify-center items-center", className)}>
      {label && <Text as="span" size="xs" className="flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 rounded-full px-3 py-1 uppercase">{label}</Text>}
      {title && <Text as="h2" size="6xl" className="text-center font-black tracking-tighter uppercase !leading-[120%] bg-clip-text bg-gradient-to-r from-white to-neutral-400 text-transparent drop-shadow-2xl w-fit">{title}&nbsp;</Text>}
      {description && <Text size="base" className="text-neutral-400 text-center mt-2 max-w-2xl drop-shadow-md">{description}&nbsp;</Text>}
    </PageContainer>
  )
}

export default Headline;