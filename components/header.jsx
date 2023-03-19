import { NAV_LINKS } from "@/content/misc";
import Link from "next/link";
import React, { useState } from "react";
import { Logo, Menu, ZStack } from "./misc";
import { PageContainer } from "./page-container";
import { Rubik, Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <ZStack className="z-50 fixed w-full">
      <div className="">
        <header className=" backdrop-blur-md bg-black/50 border-white border-b">
          <PageContainer className="flex flex-col">
            <div className="h-16 md:h-24 flex flex-row items-center justify-between">
              <Logo />
              <span onClick={() => setOpen(!open)}>
                <Menu />
              </span>
            </div>
          </PageContainer>
        </header>
      </div>
      <div
        className={`bg-black h-screen w-full ${open ? "visible" : "hidden"}`}
      >
        <header className="bg-black border-white">
          <PageContainer className="flex flex-col">
            <div className="h-16 md:h-24 flex flex-row items-center justify-between">
              <Logo />
              <span onClick={() => setOpen(!open)}>
                <Menu />
              </span>
            </div>
            <ul className="animate-fade-in mt-24 md:mt-48 flex flex-col border-t">
              {NAV_LINKS.map((o) => (
                <Link key={o.href} href={o.href}>
                  <div className="h-24 border-b flex items-center">
                    <span className={unbounded.className}>{o.label}</span>
                  </div>
                </Link>
              ))}
            </ul>
          </PageContainer>
        </header>
      </div>
    </ZStack>
  );
}
