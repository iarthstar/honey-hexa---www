import React from 'react'
import { PageContainer } from '@/components/misc';
import Brand from '@/components/molecules/brand';
import PhoneArrowUpRight from '@/components/icons/phone-arrow-up-right';
import { NavigationMenu } from './navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="sticky w-full top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">


      <header className="h-20 mx-4 lg:mx-24 flex justify-between items-center text-white">
        {/* LOGO */}
        <div className="w-44">
          <Brand />
        </div>

        {/* NAVIGATION */}
        <div>
          <NavigationMenu />
        </div>

        {/* CTA */}
        <div className="w-44 flex justify-end">
          <Link href="/contact" className="shadow-md bg-black border border-white/20 flex flex-row items-center text-sm text-white font-medium px-4 py-2 rounded-full">Book Now &nbsp; <PhoneArrowUpRight /></Link>
        </div>
      </header>

    </div>

  )
}

export default Header;