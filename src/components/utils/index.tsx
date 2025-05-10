import Script from "next/script";
import * as React from "react";

export const Element: React.FC<{ as: any } & React.HTMLAttributes<HTMLElement>> = ({
  as,
  children,
  ...rest
}) => {
  return React.createElement(as, { ...rest }, children);
};

export const StructuredData: React.FC<any> = ({ data }) => (
  <Script
    id="jsonld"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);