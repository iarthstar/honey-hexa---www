import { Rubik, Unbounded } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

const PageContainer = ({ children, className, ...rest }) => (
  <div
    {...rest}
    className={`max-w-7xl m-auto px-4 break-words ${rubik.className} ${className}`}
  >
    {children}
  </div>
);

const Page = ({ children, className, ...rest }) => (
  <div className="z-stack">
    {/* <div className=" z-0">
      <div className="z-0 w-96 h-96 translate-y-48 translate-x-32 bg-black brightness-200 rounded-full"></div>
    </div> */}
    <div className=" z-10 backdrop-blur-2xl bg-black/90" />
    <div className="z-40 bg-black opacity-[0.1] bg-[url('/noise.png')]" />
    <div {...rest} className={`z-50 text-white ${className}`}>
      {children}
    </div>
  </div>
);

const Logo = () => (
  <h3 className="text-lg md:text-3xl font-bold drop-shadow-4xl text-gradient">
    <span className={unbounded.className}>HONEY HEXA</span>
  </h3>
);

const SectionHeading = ({ heading }) => (
  <div className="border-slate-400 pt-36 pb-12 md:pt-72 md:pb-24">
    <h3 className="text-4xl md:text-7xl drop-shadow-4xl text-gradient">
      <span className={unbounded.className}>{heading}</span>
    </h3>
  </div>
);

const Section = ({ children, className, ...rest }) => (
  <div {...rest} className={`px-4 md:px-10 ${className}`}>
    {children}
  </div>
);

const TAGS = ["Logo", "Design System", "Print", "Assets"];

const SERVICES = [
  { serviceName: "Branding & Identity", tags: TAGS },
  { serviceName: "Web Development", tags: TAGS },
  { serviceName: "Search Engine Optimisation", tags: TAGS },
  { serviceName: "Content Creation", tags: TAGS },
];

const WORKS = [
  { workName: "Kuber Creations", tags: TAGS },
  { workName: "Netra Constructions", tags: TAGS },
  { workName: "Harshid Engravers", tags: TAGS },
  { workName: "AJK Masala", tags: TAGS },
];

const Book = ({ children = "BOOK A CALL", className, ...rest }) => (
  <button
    {...rest}
    onClick={() =>
      window.open("https://cal.com/honeyhexa/15min?duration=15", "_blank")
    }
    className={`bg-black overflow-hidden relative py-1 px-3 md:py-2 md:px-6 border-slate-400 border ${unbounded.className} ${className}`}
  >
    <span className="text-sm md:text-lg font-medium text-gradient">
      {children}
    </span>
    <div className="absolute top-0 -inset-full h-full w-full z-5 block transform -skew-x-[33deg] bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
  </button>
);

export default function Home() {
  return (
    <Page>
      <header className="z-30 sticky top-0 backdrop-blur-md bg-black/50 border-slate-400 border-b">
        <PageContainer className="h-16 md:h-24 flex flex-row items-center justify-between">
          {/* HEADER SECTION */}
          <Logo />
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
        </PageContainer>
      </header>

      <PageContainer>
        <main className={rubik.className}>
          {/* HERO SECTION */}
          <div className="border-slate-400 py-32 md:py-56">
            <h1 className="drop-shadow-4xl translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-4xl md:text-7xl text-gradient">
              <span className={unbounded.className}>
                WE TURN YOUR IDEAS INTO DIGITAL PRODUCTS
              </span>
            </h1>
            <h2 className="translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-md md:text-xl mt-12 md:mt-24">
              Unleash the Power of Your Brand,
              <br />
              Improve your online presence and customer experience with us
            </h2>
            <Book className="shadow-4xl hover:shadow-none transition-shadow mt-4 md:mt-8 translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:500ms]" />
          </div>

          {/* ABOUT SECTION */}
          <Section className="backdrop-blur-xl bg-black border-slate-400 border py-16 md:py-32 ">
            <h3 className="text-4xl md:text-4xl text-gradient">
              <span className={unbounded.className}>
                Elevate Your Digital Game with Honey Hexa&apos;s Cutting-Edge
                Strategies
              </span>
            </h3>
            <p className="text-xl mt-12">
              <span className={rubik.className}>
                We aim to provide you comprehensive suite of services to help
                your businesses build, maintain, and grow their online presence
                and brand identity.
              </span>
            </p>
          </Section>

          {/* SERVICES SECTION */}
          <SectionHeading heading="Our Services" />
          <div className="border-slate-400 border">
            <ol>
              {SERVICES.map((o, i) => (
                <li
                  className="backdrop-blur-xl bg-black px-4 py-16 md:px-16 border-slate-400 border-b"
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
                        className="text-md md:text-lg py-1 px-3 md:py-4 md:px-8 border-slate-400 border"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          {/* WORK SECTION */}
          <SectionHeading heading="Our Work" />
          <div className="backdrop-blur-xl bg-black border-slate-400 border p-4 md:p-24 flex flex-col gap-y-4 md:gap-y-24">
            {WORKS.map((w) => (
              <div
                key={w.workName}
                className={`${unbounded.className} h-96 flex items-center justify-center overflow-x-hidden bg-cover bg-[url('https://images.unsplash.com/photo-1677443030437-93c9f5e08ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80')]`}
              >
                <div className="relative">
                  <div className="flex flex-row animate-marquee whitespace-nowrap text-6xl">
                    {[...Array(10).keys()].map((k) => (
                      <div key={k} className="text-gradient">
                        &nbsp;&nbsp;•&nbsp;&nbsp;VIEW CASE
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 flex flex-row animate-marquee2 whitespace-nowrap text-6xl">
                    {[...Array(10).keys()].map((k) => (
                      <div key={k} className="text-gradient">
                        &nbsp;&nbsp;•&nbsp;&nbsp;VIEW CASE
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </PageContainer>

      {/* FOOTER SECTION */}
      <PageContainer>
        <SectionHeading heading={"Let's Connect"} />
        <div className="pb-32">
            <h2 className="text-md md:text-xl">
              Free consultation for your digital needs, we love to connect with our partners and help them with their way forward.
            </h2>
            <Book className="shadow-4xl hover:shadow-none transition-shadow mt-4 md:mt-8 translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
              Let&apos;s discuss
            </Book>
          </div>
      </PageContainer>
      <footer className="backdrop-blur-xl bg-black border-slate-400 border-t py-4 md:py-10">
        <PageContainer className="flex flex-col md:flex-row md:items-center justify-between h-56">
          <div>
            <Logo />
          </div>
          <ul className="flex flex-row gap-8">
            <li>
              Twitter{" "}
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
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
          <div className="flex flex-row">
            Made with&nbsp;
            <span className="text-red-500 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
            &nbsp; by Girls in Ahmedabad
          </div>
        </PageContainer>
      </footer>
    </Page>
  );
}
