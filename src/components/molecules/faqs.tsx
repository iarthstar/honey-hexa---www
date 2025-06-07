import * as React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FAQs = ({ items }: { items: Array<{ q: string, a: string }>}) => (
  <Accordion.Root
    className="w-[300px] rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {items.map((o, i) => (<AccordionItem key={i} value="item-1">
      <AccordionTrigger>{o.q}</AccordionTrigger>
      <AccordionContent>
        {o.a}
      </AccordionContent>
    </AccordionItem>))}
  </Accordion.Root>
);

const AccordionItem: React.FC<any> = ({ children, className, ...props }) => (
  <Accordion.Item
    className={classNames(
      "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
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
        "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
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
      "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className
    )}
    {...props}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
);

export default FAQs;
