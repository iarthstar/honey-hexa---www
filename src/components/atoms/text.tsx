import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { Element } from "@/components/utils";

const text = cva("text", {
  variants: {
    size: {
      "7.5rem": [
        "text-[2rem] md:text-[4rem] lg:text-[7.5rem]",
      ],
      "8xl": ["text-4xl", "sm:text-4xl", "md:text-6xl", "lg:text-8xl"],
      "7xl": ["text-7xl"],
      "6xl": [
        "text-4xl sm:text-4xl md:text-5xl lg:text-6xl",
      ],
      "5xl": [
        "text-4xl sm:text-4xl md:text-5xl lg:text-5xl",
      ],
      "4xl": [
        "text-base md:text-2xl lg:text-4xl",
      ],
      "3xl": ["text-sm lg:text-[2rem] font-semibold leading-[120%]"],
      "2xl": ["text-base lg:text-2xl", "leading-tight"],
      xl: ["text-xl"],
      lg: ["text-lg"],
      md: ["text-md"],
      base: ["text-base"],
      sm: ["text-sm"],
      xs: ["text-xs"],
    },
  },
  compoundVariants: [{ size: "base" }],
  defaultVariants: {
    size: "base",
  },
});

export const Text: React.FC<any> = ({ as = "p", size, animateLines = false, className, children, ...rest }) => {
  return (
    <Element as={as} className={cn(text({ size }), className)} {...rest}>{children}</Element>
  );
}