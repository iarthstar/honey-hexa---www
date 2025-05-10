import { cn } from "@/utils";
import { Element } from "@/components/utils";
import * as React from "react";

export const PageContainer: React.FC<{ as?: any } & React.HTMLAttributes<HTMLElement>> = ({
  as = "div",
  className,
  ...rest
}) => (
  <Element as={as} className={cn("w-full m-auto max-w-5xl px-4 sm:px-4 md:px-8 lg:px-4", className)} {...rest} />
);