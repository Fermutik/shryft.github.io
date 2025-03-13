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
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AppSidebar } from "@/components/app-sidebar"
import { BasePageProps } from "./_page";
import { CardsGrid } from "@/components/cards-grid";
import { HeroSection } from "@/components/hero";


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
                    <div className="flex flex-row flex-wrap justify-center items-start gap-6 mt-6">
                        <Card className="max-w-2xl mx-auto shadow-none border-none bg-gradient-to-r from-gray-50 to-gray-100">
                            <div className="col-span-1 lg:col-span-2 p-8">
                                <h1 className="font-gilroy text-2xl md:text-3xl">Малоформатна продукція</h1>
                                <CardDescription className="mt-4 leading-relaxed">
                                    «P4» може друкувати блокноти на будь-якому
                                    матеріалі за ваших умов, пропонуючи гнучкі можливості та високу якість.
                                    Ми гарантуємо, що ви будете задоволені нашою роботою, адже оперативність
                                    та індивідуальний підхід – наші головні пріоритети.
                                </CardDescription>
                            </div>
                        </Card>
                        <Card className="max-w-2xl mx-auto py-0 hidden sm:block">
                            <div className="col-span-1 lg:col-span-2">
                                <img
                                    src="https://placehold.co/662x235/cccccc/ffffff?Image+Placeholder"
                                    width="662"
                                    height="235"
                                    alt="Carousel Image"
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                        </Card>
                    </div>
                    <CardsGrid />
                    <div className="flex flex-row flex-wrap justify-center items-start gap-6 mt-6">
                        <Card className="max-w-2xl mx-auto shadow-none border-none bg-gradient-to-r from-gray-50 to-gray-100">
                            <div className="col-span-1 lg:col-span-2 p-8">
                                <h1 className="font-gilroy text-2xl md:text-3xl">Малоформатна продукція</h1>
                                <CardDescription className="mt-4 leading-relaxed">
                                    «P4» може друкувати блокноти на будь-якому
                                    матеріалі за ваших умов, пропонуючи гнучкі можливості та високу якість.
                                    Ми гарантуємо, що ви будете задоволені нашою роботою, адже оперативність
                                    та індивідуальний підхід – наші головні пріоритети.
                                </CardDescription>
                            </div>
                        </Card>
                        <Card className="max-w-2xl mx-auto py-0 hidden sm:block">
                            <div className="col-span-1 lg:col-span-2">
                                <img
                                    src="https://placehold.co/662x235/cccccc/ffffff?Image+Placeholder"
                                    width="662"
                                    height="235"
                                    alt="Carousel Image"
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                        </Card>
                    </div>
                    <CardsGrid />
                    <div className="flex flex-row flex-wrap justify-center items-start gap-6 mt-6">
                        <Card className="max-w-2xl mx-auto shadow-none border-none bg-gradient-to-r from-gray-50 to-gray-100">
                            <div className="col-span-1 lg:col-span-2 p-8">
                                <h1 className="font-montserrat-alternates text-2xl md:text-3xl">Малоформатна продукція</h1>
                                <CardDescription className="mt-4 leading-relaxed">
                                    «P4» може друкувати блокноти на будь-якому
                                    матеріалі за ваших умов, пропонуючи гнучкі можливості та високу якість.
                                    Ми гарантуємо, що ви будете задоволені нашою роботою, адже оперативність
                                    та індивідуальний підхід – наші головні пріоритети.
                                </CardDescription>
                            </div>
                        </Card>
                        <Card className="max-w-2xl mx-auto py-0 hidden sm:block">
                            <div className="col-span-1 lg:col-span-2">
                                <img
                                    src="https://placehold.co/662x235/cccccc/ffffff?Image+Placeholder"
                                    width="662"
                                    height="235"
                                    alt="Carousel Image"
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                        </Card>
                    </div>
                    <CardsGrid />
                    <HeroSection />
                    <Footer t={t} lang={lang} />
                </div >
            </SidebarInset>
        </SidebarProvider>
    );
}
