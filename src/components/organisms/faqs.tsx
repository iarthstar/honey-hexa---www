import * as React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Headline from "../molecules/headline";
import { PageContainer } from "../misc";

const makeFAQSchema = ({
  items = [],
}: {
  items?: Array<{ q: string; a: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    items.map((o) => ({
      "@type": "Question",
      name: o.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: o.a,
      },
    })),
  ],
});

const FAQs = ({ items = [] }: { items?: Array<{ q: string; a: string }> }) => (
  <div className="bg-gradient-to-b from-neutral-900 to-black flex flex-col items-center bg-black text-white pt-32">
    <Headline className="" label="FAQs" title="most common questions" />

    <PageContainer className=" mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeFAQSchema({ items })).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Accordion.Root
        className="w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {items.map((o, i) => (
          <AccordionItem key={`key-${i}`} value={`value-${i}`}>
            <AccordionTrigger>{o.q}</AccordionTrigger>
            <AccordionContent>{o.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion.Root>
    </PageContainer>
  </div>
);

const AccordionItem: React.FC<any> = ({ children, className, ...props }) => (
  <Accordion.Item
    className={classNames(
      "w-full mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-zinc-500/20",
      className
    )}
    {...props}
  >
    {children}
  </Accordion.Item>
);

const AccordionTrigger: React.FC<any> = ({ children, className, ...props }) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none shadow-[0_1px_0] shadow-zinc-500/20 outline-none hover:bg-mauve2",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
);

const AccordionContent: React.FC<any> = ({ children, className, ...props }) => (
  <Accordion.Content
    className={classNames(
      "overflow-hidden bg-mauve2 text-[15px] text-neutral-400 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className
    )}
    {...props}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
);

export default FAQs;
