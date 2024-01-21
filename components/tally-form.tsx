"use client";
import Image from "next/image";
import Script from "next/script";
import React from "react";

const TallyForm = () => {
  return (
    <>
      <button
        className="fixed bottom-3 right-3 h-11 w-11 rounded-full bg-black shadow-xl text-3xl p-2"
        onClick={() => (window as any)?.Tally?.openPopup?.("3yY7B8")}
      >
        <Image height={44} width={44} alt="intercom" src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f44b-1f3fb.gif"/>
      </button>
      <Script
        async
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          (window as any).TallyConfig = {
            formId: "3yY7B8",
            popup: {
              emoji: {
                text: "👋",
                animation: "wave",
              },
              autoClose: 2000,
            },
          };
        }}
      />
    </>
  );
};

export default TallyForm;
