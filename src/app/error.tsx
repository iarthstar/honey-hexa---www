"use client";

import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import ErrorHero from "@/components/organisms/error-hero";

export default function Home() {
    return (
        <>
            {/* HEADER */}
            <Header />

            {/* BODY */}
            <ErrorHero />

            {/* FOOTER */}
            <Footer />
        </>
    );
}
