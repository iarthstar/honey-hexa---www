import { PageContainer } from "@/components/page-container";
import TallyForm from "@/components/tally-form";
import { METADATA_HOME } from "@/content/misc";

export const metadata = { ...METADATA_HOME };

export default function HomePage() {
  return (
    <PageContainer>
      <header className="sticky top-0 mix-blend-difference z-10">
        <h1 className="text-2xl md:text-4xl text-center py-8 md:py-16 text-white outline-none">
          HONEY HEXA
        </h1>
      </header>
      <main>
        <section
          aria-label="work"
          className="grid grid-cols-1 gap-16 md:gap-32"
        >
          <div
            aria-label="showcase"
            className="border rounded-[1rem] shadow overflow-hidden"
          >
            {/* <Image className="w-full h-full" width={1920} height={1080} src="/images/diamond.jpg" alt="Showcase" /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[16/10] object-cover"
              poster="/images/showcase_poster_1.png"
            >
              <source src="/videos/showcase.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <span>
              <p className="text-sm md:text-base text-center text-blue-500">
                #design
              </p>
              <p className="text-lg md:text-2xl text-center">
                Robotics Startup
              </p>
            </span>
            <div className="border rounded-[1rem] shadow overflow-hidden">
              {/* <Image className="w-full h-full" width={1280} height={720} src="/images/hh-screen.png" alt="Showcase" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] object-cover"
                poster="/images/work_poster_1.png"
              >
                <source src="/videos/work_1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <span>
              <p className="text-sm md:text-base text-center text-blue-500">
                #brand #design #development
              </p>
              <p className="text-lg md:text-2xl text-center">Investment Firm</p>
            </span>
            <div className="border rounded-[1rem] shadow overflow-hidden">
              {/* <Image className="w-full h-full" width={1920} height={1080} src="/images/diamond.jpg" alt="Showcase" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] object-cover"
                poster="/images/work_poster_2.png"
              >
                <source src="/videos/work_2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <span>
              <p className="text-sm md:text-base text-center text-blue-500">
                #brand #design
              </p>
              <p className="text-lg md:text-2xl text-center">FinTech Startup</p>
            </span>
            <div className="border rounded-[1rem] shadow overflow-hidden">
              {/* <Image className="w-full h-full" width={1920} height={1080} src="/images/diamond.jpg" alt="Showcase" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] object-cover"
                poster="/images/work_poster_3.png"
              >
                <source src="/videos/work_3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <span>
              <p className="text-sm md:text-base text-center text-blue-500">
                #brand #design
              </p>
              <p className="text-lg md:text-2xl text-center">
                Robotics Startup
              </p>
            </span>
            <div className="border rounded-[1rem] shadow overflow-hidden">
              {/* <Image className="w-full h-full" width={1920} height={1080} src="/images/diamond.jpg" alt="Showcase" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] object-cover"
                poster="/images/work_poster_4.png"
              >
                <source src="/videos/work_4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <span>
              <p className="text-sm md:text-base text-center text-blue-500">
                #brand #design
              </p>
              <p className="text-lg md:text-2xl text-center">
                Manufacturing Firm
              </p>
            </span>
            <div className="border rounded-[1rem] shadow overflow-hidden">
              {/* <Image className="w-full h-full" width={1920} height={1080} src="/images/diamond.jpg" alt="Showcase" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] object-cover"
                poster="/images/work_poster_5.png"
              >
                <source src="/videos/work_5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <span>
              <p className="text-sm md:text-base text-center text-blue-500">
                #brand #design
              </p>
              <p className="text-lg md:text-2xl text-center">Influencer</p>
            </span>
            <div className="border rounded-[1rem] shadow overflow-hidden">
              {/* <Image className="w-full h-full" width={1920} height={1080} src="/images/diamond.jpg" alt="Showcase" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/9] object-cover"
                poster="/images/work_poster_6.png"
              >
                <source src="/videos/work_6.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </main>
      <TallyForm />
      <footer>
        <p className="py-8 text-gray-500 text-sm text-center">
          &copy; 2024 Honey Hexa
        </p>
      </footer>
    </PageContainer>
  );
}
