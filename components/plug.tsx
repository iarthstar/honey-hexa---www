"use client";
import Script from "next/script";
import React from "react";

const PLuG = () => {
  return (
    <>
      <Script
        async
        src="https://plug-platform.devrev.ai/static/plug.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).plugSDK.init({
            // Please ensure you replace the app_id with your unique app id
            app_id: "don:core:dvrv-us-1:devo/FZ2StPCL:plug_setting/1",
          });
        }}
      />
    </>
  );
};

export default PLuG;
