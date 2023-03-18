import { Rubik, Unbounded } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

const PageContainer = ({ children, className, ...rest }) => (
  <div {...rest} className={`max-w-7xl m-auto ${className}`}>
    {children}
  </div>
);

const Page = ({ children, className, ...rest }) => (
  <div {...rest} className={`bg-black text-white ${className}`}>
    {children}
  </div>
);

const Logo = () => (
  <h3 className="text-xl font-bold">
    <span className={unbounded.className}>HONEY HEXA</span>
  </h3>
);

const TAGS = ["ONE", "TWO", "THREE", "FOUR"];

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

export default function Home() {
  return (
    <Page>
      <header className="z-10 sticky top-0 backdrop-blur-md border-b">
        <PageContainer className="h-24 flex flex-row items-center justify-between">
          {/* HEADER SECTION */}
          <Logo />
          <div>Book a call</div>
        </PageContainer>
      </header>

      <PageContainer>
        <main className={rubik.className}>
          {/* HERO SECTION */}
          <div className="text-center border-l pb-20">
            <h1 className="text-8xl py-32 font-bold">
              <span
                className={unbounded.className}
                style={{
                  background:
                    "linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38)) text",
                }}
              >
                Your Partner in <br />
                AI-Enhanced Solutions
              </span>
            </h1>
            <h2 className="text-xl">
              Unleash the Power of Your Brand, Improve your online presence and
              customer experience with us
            </h2>
            <button className="mt-44">SCROLL DOWN</button>
          </div>

          {/* ABOUT SECTION */}
          <div className="border p-56 text-center">
            <h3 className="text-6xl">
              <span className={unbounded.className}>
                Elevate Your Digital Game with Honey Hexa&apos;s Cutting-Edge
                Strategies
              </span>
            </h3>
            <p className="text-xl mt-20">
              <span className={rubik.className}>
                We aim to provide you comprehensive suite of services to help
                your businesses build, maintain, and grow their online presence
                and brand identity.
              </span>
            </p>
          </div>

          {/* SERVICES SECTION */}
          <div className="border-r p-56 text-center">
            <h3 className="text-6xl">
              <span className={unbounded.className}>Our Services</span>
            </h3>
          </div>
          <div className="border">
            <ol>
              {SERVICES.map((o, i) => (
                <li className="p-16 border-b" key={o.serviceName}>
                  <h4 className="text-4xl">
                    <span className="text-2xl">0{i + 1}</span> &nbsp;{" "}
                    <span className={unbounded.className}>{o.serviceName}</span>
                  </h4>
                  <ul className="flex flex-row gap-4 mt-10">
                    {o.tags.map((t) => (
                      <li key={t} className="py-4 px-8 border">
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          {/* WORK SECTION */}
          <div className="border-r p-56 text-center">
            <h3 className="text-6xl">
              <span className={unbounded.className}>Our Work</span>
            </h3>
          </div>
          <div className="border">
            {WORKS.map((w) => (
              <div
                key={w.workName}
                className={`${unbounded.className} mx-32 my-64 relative flex overflow-x-hidden`}
              >
                <div className="flex flex-row animate-marquee whitespace-nowrap text-6xl">
                  {[...Array(10).keys()].map((k) => (
                    <div key={k}>&nbsp;• VIEW CASE</div>
                  ))}
                </div>
                <div className="absolute top-0 flex flex-row animate-marquee2 whitespace-nowrap text-6xl">
                  {[...Array(10).keys()].map((k) => (
                    <div key={k}>&nbsp;• VIEW CASE</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </PageContainer>

      {/* FOOTER SECTION */}
      <PageContainer>
        <div className="border-r p-56 text-center">
          <h3 className="text-6xl">
            <span className={unbounded.className}>Let&apos;s connect</span>
          </h3>
        </div>
      </PageContainer>
      <footer>
        <PageContainer className="flex flex-row justify-between border-t h-56 items-center">
          <div>
            <Logo />
          </div>
          <ul className="flex flex-row gap-8">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
          <div>
            Made with <span className="text-red-500 text-xl">❤</span> by Girls
            in Ahmedabad
          </div>
        </PageContainer>
      </footer>
    </Page>
  );
}
