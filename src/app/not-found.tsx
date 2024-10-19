import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import NotFoundHero from "@/components/organisms/not-found-hero";

export default function Home() {
    return (
        <>
            {/* HEADER */}
            <Header />

            {/* BODY */}
            <NotFoundHero />

            {/* FOOTER */}
            <Footer />
        </>
    );
}
