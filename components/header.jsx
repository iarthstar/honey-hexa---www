import React from "react";
import { Logo, Menu } from "./misc";
import { PageContainer } from "./page-container";

export function Header() {
  return (
    <header className="z-30 sticky top-0 backdrop-blur-md bg-black/50 border-white border-b">
      <PageContainer className="h-16 md:h-24 flex flex-row items-center justify-between">
        <Logo />
        <Menu />
      </PageContainer>
    </header>
  );
}
