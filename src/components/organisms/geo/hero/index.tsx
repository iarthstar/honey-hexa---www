import React from "react";
import { PageContainer } from "@/components/misc";
import PhoneArrowUpRight from "@/components/icons/phone-arrow-up-right";
import Link from "next/link";
import { Text } from "@/components/atoms/text";
import Marquee from "@/components/molecules/marquee";
import RocketLaunch from "../../../icons/rocket-launch";
import { StarFilledIcon } from "@radix-ui/react-icons";

const marqueeItems = [
  { label: "NETRA CONSTRUCTIONS" },
  { label: "AJK MASALA" },
  { label: "HARSHID ENGRAVERS" },
  { label: "KUBER CREATIONS" },
  { label: "SERP ONE" },
  { label: "PARAMHANSA VALUES" },
  { label: "SCRIPT BAZAAR" },
];

const VARIABLES = {
  SERVICE: "Business Website",
  AREA: "Naranpura",
  CITY: "Ahmedabad",
};

const GeoHero = ({
  service = VARIABLES.SERVICE,
  area = VARIABLES.AREA,
}) => {
  return (
    <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
      <PageContainer className="flex flex-col justify-center items-center h-96 mt-28 mb-20">
        <Text
          as="span"
          size="xs"
          className="flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 tracking-wide rounded-full px-3 py-2 shadow-xl uppercase mb-4"
        >
          <RocketLaunch />
          GROW 10X
        </Text>
        <Text
          as="h1"
          size="6xl"
          className="bg-gradient-to-r from-white from-[30%] to-neutral-300 text-transparent bg-clip-text font-black text-center uppercase tracking-tight drop-shadow-lg leading-16"
        >
          {service} Experts
          <br />
          <span className="bg-gradient-to-r from-blue-200 from-[30%] to-blue-400 text-transparent bg-clip-text">
            at {area} - {VARIABLES.CITY}
          </span>
        </Text>
        <Text
          as="p"
          size="md"
          className="text-white text-center mt-4 max-w-3xl drop-shadow-lg"
        >
          Serving {VARIABLES.CITY} business owners since 1997 <br />
        </Text>
        <Text
          as="p"
          size="md"
          className="flex flex-row items-center text-white text-center mt-2 max-w-3xl drop-shadow-lg"
        >
          500+&nbsp;
          <span className="flex flex-row *:text-yellow-500 *:drop-shadow-lg">
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
          </span>
          &nbsp; Reviews
        </Text>
        <div className="mt-12">
          <Link
            href="/contact"
            className="drop-shadow-lg border border-white hover:border-blue-500 bg-white hover:bg-blue-900 hover:text-white text-blue-900 px-8 py-4 rounded-full text-regular font-semibold flex flex-row items-center"
          >
            Get Your Free Consultation Now &nbsp; <PhoneArrowUpRight />
          </Link>
        </div>
      </PageContainer>
      <Marquee
        items={marqueeItems}
        view={(o: any) => (
          <div className="text-white drop-shadow-lg uppercase text-2xl font-bold tracking-tighter px-24 py-12">
            {o.label}
          </div>
        )}
      />
    </div>
  );
};

export default GeoHero;
