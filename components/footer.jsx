import Link from "next/link";
import React from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/content/misc";
import {
  Button,
  Heart,
  ICON_DRIBBBLE,
  ICON_INSTAGRAM,
  ICON_TWITTER,
  ICON_BEHANCE,
  ICON_BENTO,
  ICON_READCV,
  Logo,
} from "@/components/misc";
import { PageContainer } from "./page-container";

const LOGO_MAP = {
  TWITTER: <ICON_TWITTER />,
  DRIBBBLE: <ICON_DRIBBBLE />,
  INSTAGRAM: <ICON_INSTAGRAM />,
  BEHANCE: <ICON_BEHANCE />,
  BENTO: <ICON_BENTO />,
  READCV: <ICON_READCV />,
};

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

          <ul className="flex flex-row gap-x-6 gap-y-6 flex-wrap">
            {SOCIAL_LINKS.map((o) => (
              <li key={o.href}>
                  <Button
                    type="button"
                    href={o.href}
                    aria-label={o.label}
                    className="flex justify-center items-center h-12 w-12"
                  >
                    {LOGO_MAP[o.label]}
                  </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t text-sm text-gray-100 flex flex-col md:flex-row md:justify-between md:items-center mt-10 h-24">
          <p className="mt-4">2023 Honey Hexa, all rights reserved.</p>
          <p className="flex flex-row mt-4">
            Made with&nbsp;
            <span className="text-red-500">
              <Heart style={{ width: "12px" }} />
            </span>
            &nbsp; by Women in Ahmedabad
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
