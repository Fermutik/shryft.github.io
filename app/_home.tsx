"use client";

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
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
                    <div className="relative w-screen justify-center  hidden lg:flex ">
                        <div className="z-0 absolute top-1/2 left-0 w-screen h-[150px] bg-primary -translate-y-1/2 pointer-events-none" />
                        <Carousel className="w-full max-w-3xl flex justify-center items-center mt-3 ">
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="flex justify-center items-center">

                                            <img
                                                src="https://placehold.co/768x250/cccccc/ffffff?Image+Placeholder"
                                                width="768"
                                                height="250"
                                                alt="Carousel Image"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
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
