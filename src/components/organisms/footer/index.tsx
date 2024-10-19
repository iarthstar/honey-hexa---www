import { PageContainer } from '@/components/misc';
import Brand from '@/components/molecules/brand';
import { COMPANY, RESOURCES, SERVICES, SOLUTIONS } from '@/content/shared';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const Listing = ({ title, items }: { title: string, items: Array<{ label: string, value: string, href?: string }> }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-medium pb-2">{title}</h3>
      <ul className="flex flex-col text-sm text-neutral-500 [&>li]:inline-flex">
        {items.map((item) => (
          <li key={item.value}>
            <Link href={item.href ?? item.value} className="py-2 hover:text-white hover:underline-offset-4 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="border-b border-white/20 w-full h-24"></div>
      <PageContainer className="py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="row-span-1 flex flex-col">
          <Brand />
          <p className="text-lg text-white font-black uppercase pt-2">Honey Hexa</p>
          <p className="text-sm text-neutral-400 py-1">Your partner in digital universe</p>
          <div className="flex flex-row mt-8">
            <TwitterLogoIcon className="w-10 h-10 p-2" />
            <InstagramLogoIcon className="w-10 h-10 p-2" />
            <GitHubLogoIcon className="w-10 h-10 p-2" />
            <LinkedInLogoIcon className="w-10 h-10 p-2" />
          </div>

        </div>
        <div className="row-span-1">
          <Listing title="Resources" items={RESOURCES} />
          <br />
          <br />
          <Listing title="Company" items={COMPANY} />
        </div>
        <div className="row-span-1">
          <Listing title="Services" items={SERVICES} />
        </div>
        <div className="row-span-1">
          <Listing title="Solutions" items={SOLUTIONS} />
        </div>

      </PageContainer>
      <div className="border-t border-white/20 w-full h-24">
        <PageContainer className="py-12 gap-2 flex flex-col  md:flex-row items-start md:items-center justify-between">
          <p className="text-sm text-neutral-400">
            © 2024 <span className="text-white font-medium">Honey Hexa</span> Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="text-sm text-neutral-400">
          <span className="text-white font-medium">Women-led</span> Enterprise from India
          </p>
        </PageContainer>
      </div>
    </div>
  )
}

export default Footer;