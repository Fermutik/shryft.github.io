"use client";

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BasePageProps } from "./_page";
import { CardsGrid } from "@/components/cards-grid";
import { HeroSection } from "@/components/hero";
import SmallFormatUA from "@/markdown/ua/home/small-format.mdx";
import SmallFormatRU from "@/markdown/ru/home/small-format.mdx";
import LargeFormatUA from "@/markdown/ua/home/large-format.mdx";
import LargeFormatRU from "@/markdown/ru/home/large-format.mdx";
import ServicesUA from "@/markdown/ua/home/services.mdx";
import ServicesRU from "@/markdown/ru/home/services.mdx";
import Image from "next/image";

export interface HomeItem {
    title: string;
    image: string;
    article_ua: React.ComponentType<any>;
    article_ru: React.ComponentType<any>;
    cardsData: CardData[];
}

export interface CardData {
    title: string;
    image: string;
    description: string;
}

const cardsData = [
    {
        title: "presentations",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для каталогов. Здесь будет вторая часть описания.",
    },
    {
        title: "brochures",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для лекал. Здесь будет вторая часть описания.",
    },
    {
        title: "booklets",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для бланков. Здесь будет вторая часть описания.",
    },
    {
        title: "hangers",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для бейджей. Здесь будет вторая часть описания.",
    },
    {
        title: "books",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для сертификатов. Здесь будет вторая часть описания.",
    },
    {
        title: "catalogs",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для визиток. Здесь будет вторая часть описания.",
    },
    {
        title: "patterns",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для листовок. Здесь будет вторая часть описания.",
    },
    {
        title: "badges",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для бирок. Здесь будет вторая часть описания.",
    },
]


export const homeItems: HomeItem[] = [
    { title: "small-format", article_ua: SmallFormatUA, article_ru: SmallFormatRU, image: "small-format.jpg", cardsData: cardsData },
    { title: "large-format", article_ua: LargeFormatUA, article_ru: LargeFormatRU, image: "large-format.png", cardsData: cardsData },
    { title: "services", article_ua: ServicesUA, article_ru: ServicesRU, image: "services.png", cardsData: cardsData },
]

export default function HomePage({ t, lang }: BasePageProps) {

    return (
        <SidebarProvider>
            <AppSidebar t={t} lang={lang} />
            <SidebarInset>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100">
                    <Navbar t={t} lang={lang} />
                    <img
                        src="/home/banner.png"
                        srcSet="
                            /home/banner.png 1920w,
                            /home/banner-1536.png 1536w,
                            /home/banner-1200.png 1200w,
                            /home/banner-768.png 768w,
                            /home/banner-600.png 600w,
                        "
                        sizes="(max-width: 720px) 100vw, (max-width: 960px) 100vw, 1920px"
                        width="1920"
                        height="600"
                        alt="banner"
                        className="alignnone size-full hidden lg:block"
                    ></img>
                    <CardsGrid t={t} lang={lang} item={homeItems[0]} />
                    <CardsGrid t={t} lang={lang} item={homeItems[1]} />
                    <CardsGrid t={t} lang={lang} item={homeItems[2]} />
                    <HeroSection />
                    <Footer t={t} lang={lang} />
                </div >
            </SidebarInset>
        </SidebarProvider>
    );
}
