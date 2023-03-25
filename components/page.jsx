import React from "react";

export function Page({ children, className, ...rest }) {
  return (
    <div className="z-stack">
      {/* <div className=" z-0">
        <div className="z-0 w-96 h-96 translate-y-48 translate-x-32 bg-black brightness-200 rounded-full"></div>
      </div> */}
      <div className="z-0 bg-black/90" />
      <div className="z-10 grayscale">
        <img
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
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
