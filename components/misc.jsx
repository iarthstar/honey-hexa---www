"use client";

import { PageContainer } from "./page-container";
import { Rubik, Unbounded } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

export const ICON_TWITTER = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    {" "}
    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
  </svg>
);

export const ICON_READCV = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
    />
  </svg>
);

export const ICON_BENTO = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
);

export const ICON_BEHANCE = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="24px"
    height="24px"
  >
    <path d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438 21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438 20.101563 3 19 3 Z M 6.40625 7.6875 L 9 7.6875 C 11.300781 7.6875 11.6875 9.101563 11.6875 10 C 11.6875 11.300781 10.792969 11.710938 10.59375 11.8125 C 10.792969 11.914063 11.8125 12.1875 11.8125 13.6875 C 11.914063 15.488281 10.789063 16.1875 9.1875 16.1875 L 6.40625 16.1875 Z M 13.40625 7.6875 L 17.09375 7.6875 L 17.09375 8.6875 L 13.40625 8.6875 Z M 8.09375 9.09375 L 8.09375 11.1875 L 9 11.1875 C 9.601563 11.1875 10 10.988281 10 10.1875 C 10 9.488281 9.699219 9.09375 9 9.09375 Z M 15.59375 9.8125 C 16.992188 9.8125 18 10.605469 18 12.90625 L 18 13.59375 L 14.59375 13.59375 C 14.59375 13.894531 14.613281 15 15.8125 15 C 16.613281 15 16.988281 14.605469 17.1875 14.40625 L 17.90625 15.40625 C 17.804688 15.507813 17.113281 16.3125 15.8125 16.3125 C 14.3125 16.3125 13.09375 15.507813 13.09375 13.40625 L 13.09375 12.90625 C 13.09375 10.605469 14.292969 9.8125 15.59375 9.8125 Z M 15.40625 11.09375 C 15.105469 11.09375 14.5 11.207031 14.5 12.40625 L 16.1875 12.40625 C 16.1875 12.40625 16.40625 11.09375 15.40625 11.09375 Z M 8.09375 12.5 L 8.09375 14.8125 L 9.1875 14.8125 C 9.789063 14.8125 10.09375 14.386719 10.09375 13.6875 C 10.195313 12.886719 9.914063 12.5 9.3125 12.5 Z" />
  </svg>
);

export const ICON_DRIBBBLE = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <path d="M34.25 26c-1.402 0-2.774.123-4.113.348 1.834 4.728 3.224 9.672 4.127 14.785 4.767-2.867 8.252-7.648 9.356-13.286C40.728 26.66 37.565 26 34.25 26zM26.023 24.245c-.535-1.214-1.103-2.411-1.699-3.591C20.165 22.171 15.678 23 11 23c-2.362 0-4.671-.223-6.918-.627C4.039 22.911 4 23.451 4 24c0 5.405 2.164 10.308 5.661 13.911C13.057 31.433 18.932 26.451 26.023 24.245zM27.105 19.505c.659 1.315 1.289 2.647 1.876 4.003C30.688 23.178 32.448 23 34.25 23c3.416 0 6.687.624 9.712 1.758C43.971 24.504 44 24.256 44 24c0-4.98-1.842-9.531-4.864-13.035C35.724 14.524 31.648 17.436 27.105 19.505zM11.985 39.95C15.335 42.48 19.488 44 24 44c2.641 0 5.159-.527 7.469-1.461-.885-5.378-2.338-10.564-4.286-15.505C20.501 29.028 14.994 33.772 11.985 39.95zM37.015 8.845C33.513 5.834 28.97 4 24 4c-2.181 0-4.276.363-6.243 1.011 2.99 3.687 5.662 7.641 7.963 11.829C29.991 14.918 33.82 12.189 37.015 8.845zM4.552 19.41C6.646 19.791 8.798 20 11 20c4.173 0 8.179-.722 11.909-2.033-2.316-4.167-5.001-8.101-8.026-11.746C9.749 8.864 5.911 13.658 4.552 19.41z" />
  </svg>
);

export const ICON_INSTAGRAM = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    {" "}
    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
  </svg>
);

export const Heart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

export const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

export const ICON_CLOSE = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const ZStack = ({ children, className = "" }) => (
  <div className={`z-stack ${className}`}>{children}</div>
);

export const TextShadowGradient = ({
  children,
  className,
  shadowClass = "text-shadow",
  gradientClass = "text-gradient",
  ...rest
}) => (
  <ZStack className={className} {...rest}>
    <div className={`${shadowClass}`}>{children}</div>
    <div className={`${gradientClass}`}>{children}</div>
  </ZStack>
);
export const Logo = () => (
  <Link href="/">
    <h3 className="text-lg md:text-3xl font-bold  text-gradient">
      <span className={unbounded.className}>HONEY HEXA</span>
    </h3>
  </Link>
);

export const SectionHeading = ({ heading }) => (
  <div className="border-white pt-36 pb-12 md:pt-72 md:pb-24">
    <TextShadowGradient>
      <h3 className="text-4xl md:text-7xl  text-gradient">
        <span className={unbounded.className}>{heading}</span>
      </h3>
    </TextShadowGradient>
  </div>
);

export const Section = ({ children, className, ...rest }) => (
  <div {...rest} className={`px-4 md:px-10 ${className}`}>
    {children}
  </div>
);

export const Book = ({ children = "BOOK A CALL", className, ...rest }) => (
  <a href="https://cal.com/honeyhexa/15min?duration=15" target="_blank">
    <button
      {...rest}
      type="button"
      className={`shadow-4xl hover:shadow-none transition-shadow duration-500 bg-black text-white overflow-hidden relative py-1 px-3 md:py-2 md:px-6 border-white border ${unbounded.className} ${className}`}
    >
      <span className="text-sm md:text-lg font-medium text-gradient">
        {children}
      </span>
      <div className="absolute top-0 -inset-full h-full w-full z-5 block transform -skew-x-[33deg] bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
    </button>
  </a>
);

export const Button = ({ href, children, className, ...rest }) => (
  <a href={href} target="_blank">
    <button
      {...rest}
      type="button"
      className={`shadow-4xl hover:shadow-none transition-shadow bg-black overflow-hidden relative border-white border ${unbounded.className} ${className}`}
    >
      <TextShadowGradient>
        <span className="text-sm md:text-lg font-medium">{children}</span>
      </TextShadowGradient>
    </button>
  </a>
);

export const HeroSection = ({ title, desc, cta }) => (
  <PageContainer>
    {/* HERO SECTION */}
    <div className="border-white pt-48 pb-24 md:pt-80 md:pb-48">
      <TextShadowGradient className="translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h1 className="text-4xl md:text-7xl">
          <span className={`${unbounded.className}`}>{title}</span>
        </h1>
      </TextShadowGradient>
      <h2 className="translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-md md:text-xl mt-12 md:mt-24">
        {desc}
      </h2>
      <Book className="mt-4 md:mt-8 translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
        {cta}
      </Book>
    </div>
  </PageContainer>
);

export const AboutSection = ({ title, desc }) => (
  <PageContainer>
    <Section className="backdrop-blur-xl bg-black border-white border py-16 md:py-32 ">
      <h3 className="text-4xl md:text-4xl text-gradient">
        <span className={unbounded.className}>{title}</span>
      </h3>
      <p className="text-xl mt-12">
        <span className={rubik.className}>{desc}</span>
      </p>
    </Section>
  </PageContainer>
);

export const ServicesSection = ({ list, title }) => (
  <PageContainer>
    <SectionHeading heading={title} />
    <div className="border-white border">
      <ol>
        {list.map((o, i) => (
          <li
            className="backdrop-blur-xl bg-black px-4 py-16 md:px-16 border-white border-b"
            key={o.serviceName}
          >
            <h4 className="text-4xl text-gradient">
              {/* <span className="text-2xl">0{i + 1}</span> &nbsp;{" "} */}
              <span className={unbounded.className}>{o.serviceName}</span>
            </h4>
            <ul className="flex flex-wrap gap-4 mt-4 md:mt-10">
              {o.tags.map((t) => (
                <li
                  key={t}
                  className="text-md md:text-lg py-1 px-3 md:py-4 md:px-8 border-white border"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </PageContainer>
);

export const WorkSection = ({ title, list }) => (
  <PageContainer>
    <SectionHeading heading={title} />
    <div className="backdrop-blur-xl bg-black border-white border p-4 md:p-24 flex flex-col gap-y-4 md:gap-y-24">
      {list.map((w) => (
        <Link key={w.path} href={`/work/${w.path}`}>
          <div
            className={`${unbounded.className} h-48 flex items-center justify-center overflow-x-hidden`}
          >
            <div className="relative">
              <div className="flex flex-row animate-marquee whitespace-nowrap text-6xl">
                {[...Array(4).keys()].map((k) => (
                  <div key={k} className="text-gradient">
                    &nbsp;&nbsp;•&nbsp;&nbsp;{w?.content?.title}
                  </div>
                ))}
              </div>
              <div className="absolute top-0 flex flex-row animate-marquee2 whitespace-nowrap text-6xl">
                {[...Array(4).keys()].map((k) => (
                  <div key={k} className="text-gradient">
                    &nbsp;&nbsp;•&nbsp;&nbsp;{w?.content?.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </PageContainer>
);

export const FooterSection = () => (
  <PageContainer>
    <SectionHeading heading={"Let's Connect"} />
    <div className="pb-32">
      <h2 className="text-md md:text-xl">
        Free consultation for your digital needs, we love to connect with our
        partners and help them with their way forward.
      </h2>
      <Book className="mt-4 md:mt-8 translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:500ms]"></Book>
    </div>
  </PageContainer>
);
