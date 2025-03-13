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
                    <Card className="w-3/4 max-w-2xl mx-auto mt-4 bg-white shadow-sm border-l-4 border-primary">
                        <CardHeader className="">
                            <CardTitle className="font-montserrat-alternates text-2xl text-gray-800">
                                Малоформатна продукція
                            </CardTitle>
                            <CardDescription className="mt-2 text-gray-700 leading-relaxed">
                                «P4» може друкувати блокноти на будь-якому
                                матеріалі за ваших умов, пропонуючи гнучкі можливості та високу якість.
                                Ми гарантуємо, що ви будете задоволені нашою роботою, адже оперативність
                                та індивідуальний підхід – наші головні пріоритети.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <CardsGrid />
                    <Card className="w-3/4 max-w-2xl mx-auto mt-4 bg-white shadow-sm border-l-4 border-primary">
                        <CardHeader className="">
                            <CardTitle className="font-montserrat-alternates text-2xl text-gray-800">
                                Широкоформатна продукція
                            </CardTitle>
                            <CardDescription className="mt-2 text-gray-700 leading-relaxed">
                                «P4» може друкувати блокноти на будь-якому
                                матеріалі за ваших умов, пропонуючи гнучкі можливості та високу якість.
                                Ми гарантуємо, що ви будете задоволені нашою роботою, адже оперативність
                                та індивідуальний підхід – наші головні пріоритети.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <CardsGrid />
                    <Card className="relative w-3/4 max-w-2xl mx-auto mt-6 rounded-lg shadow-lg overflow-hidden">
                        {/* Фоновый градиент: от левого верхнего угла к правому нижнему */}
                        <div className="absolute inset-0 bg-white" />

                        {/* Контент карточки располагается поверх градиента (z-10) */}
                        <CardHeader className="relative p-8 z-10">
                            <CardTitle className="font-montserrat-alternates text-2xl md:text-3xl ">
                                Цифровий банерний друк
                            </CardTitle>
                            <CardDescription className="mt-4 leading-relaxed">
                                «P4» може друкувати блокноти на будь-якому
                                матеріалі за ваших умов, пропонуючи гнучкі можливості та високу якість.
                                Ми гарантуємо, що ви будете задоволені нашою роботою, адже оперативність
                                та індивідуальний підхід – наші головні пріоритети.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <CardsGrid />
                    <HeroSection />
                    <Footer t={t} lang={lang} />
                </div >
            </SidebarInset>
        </SidebarProvider>
    );
}
