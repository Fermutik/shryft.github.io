"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";


export interface HomePageProps {
    t: (key: string) => string;
    lang: string;
}

export default function HomePage({ t, lang }: HomePageProps) {

    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar t={t} lang={lang} />
            <div className="flex flex-row justify-start w-full h-screen"></div>
            <Footer t={t} lang={lang} />
        </div >
    );
}
