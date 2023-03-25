import Image from "next/image";
import React from "react";

export function Page({ children, className, ...rest }) {
  return (
    <div className="z-stack">
      <div className="z-0 bg-black/90" />
      <div className="z-10 grayscale relative">
        <Image
          src="/img/page_bg.avif"
          alt="page bg"
          fill="static"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "100%",
          }}
        />
      </div>
      <div className="z-40 bg-black opacity-[0.05] bg-[url('/noise.png')]" />
      <div {...rest} className={`z-50 text-white ${className}`}>
        {children}
      </div>
    </div>
  );
}
