import { NAV_LINKS } from "@/content/misc";
import Link from "next/link";
import React, { useState } from "react";
import { ICON_CLOSE, Logo, Menu, ZStack } from "./misc";
import { PageContainer } from "./page-container";
import { Rubik, Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export function Header() {
  const [open, setOpen] = useState(false);

  const Hamburger = () => (
    <span onClick={() => setOpen(!open)}>
      {open ? (
        <span className="animate-fade-in">
          <ICON_CLOSE />
        </span>
      ) : (
        <span className="animate-fade-in">
          <Menu />
        </span>
      )}
    </span>
  );
  return (
    <ZStack className="z-50 fixed w-full">
      <div className="">
        <header className=" backdrop-blur-md bg-black/50 border-white border-b">
          <PageContainer className="flex flex-col">
            <div className="h-16 md:h-24 flex flex-row items-center justify-between">
              <Logo />
              <Hamburger />
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
              <Hamburger />
            </div>
            <ul className="animate-fade-in mt-24 md:mt-48 flex flex-col border-t">
              {NAV_LINKS.map((o) => (
                <Link key={o.href} href={o.href}>
                  <div className="h-24 border-b flex items-center">
                    <h3 className="text-lg md:text-3xl font-bold  text-gradient">
                      <span className={unbounded.className}>{o.label.toUpperCase()}</span>
                    </h3>
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
