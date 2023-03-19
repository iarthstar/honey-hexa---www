import Link from "next/link";
import React from "react";
import { Button, Heart, Logo, NAV_LINKS, SOCIAL_LINKS } from "./misc";
import { PageContainer } from "./page-container";

export function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-black border-white border-t">
      <PageContainer className="flex flex-col">
        <div className="h-16 md:h-24 flex items-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:justify-between md:items-center">
          <ul className="flex flex-col gap-y-2 md:flex-row md:gap-x-8">
            {NAV_LINKS.map((o) => (
              <li key={o.href}>
                <Link href={o.href} className="text-gray-400 hover:text-white">
                  {o.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-row gap-x-6">
            {SOCIAL_LINKS.map((o) => (
              <li key={o.href}>
                <Button
                  className="flex justify-center items-center h-12 w-12"
                  href={o.href}
                >
                  {o.label}
                </Button>
                <a href={o.href} className="hidden" />
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t text-sm text-gray-100 flex flex-col md:flex-row md:justify-between md:items-center mt-10 h-24">
          <p className="mt-4">2023 Honey Hexa, all rights reserved.</p>
          <p className="flex flex-row mt-4">
            Made with&nbsp;
            <span className="text-red-500">
              <Heart />
            </span>
            &nbsp; by Ladies in Ahmedabad
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
