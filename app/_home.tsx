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


export default function HomePage({ t, lang }: BasePageProps) {

    return (
        <SidebarProvider>
            <AppSidebar t={t} lang={lang} />
            <SidebarInset>
                <div className="flex flex-col justify-center items-center">
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
                    <Card className="w-3/4 max-w-2xl mt-4">
                        <CardHeader>
                            <CardTitle className="font-montserrat-alternates text-2xl">Малоформатна продукція</CardTitle>
                            <CardDescription>«Профі Принт Запоріжжя» може друкувати блокноти на будь-якому матеріалі за ваших умов...

                                Крім того, «Профі Принт Запоріжжя» пропонує гнучкі умови щодо замовлень блокнотів...

                                Зверніться до нас зі своїми ідеями та проектами, і «Профі Принт Запоріжжя»
                                з радістю надасть вам високоякісні блокноти...

                                Ми гарантує, що ви будете задоволені нашою роботою.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <CardsGrid />
                    <Card className="w-3/4 max-w-2xl mt-4">
                        <CardHeader>
                            <CardTitle className="font-montserrat-alternates text-2xl" >Широкоформатна продукція</CardTitle>
                            <CardDescription>«Профі Принт Запоріжжя» може друкувати блокноти на будь-якому матеріалі за ваших умов...

                                Крім того, «Профі Принт Запоріжжя» пропонує гнучкі умови щодо замовлень блокнотів...

                                Зверніться до нас зі своїми ідеями та проектами, і «Профі Принт Запоріжжя»
                                з радістю надасть вам високоякісні блокноти...

                                Ми гарантує, що ви будете задоволені нашою роботою.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <CardsGrid />
                    <Card className="w-3/4 max-w-2xl mt-4">
                        <CardHeader>
                            <CardTitle className="font-montserrat-alternates text-2xl">Цифровий банерний друк</CardTitle>
                            <CardDescription>«Профі Принт Запоріжжя» може друкувати блокноти на будь-якому матеріалі за ваших умов...

                                Крім того, «Профі Принт Запоріжжя» пропонує гнучкі умови щодо замовлень блокнотів...

                                Зверніться до нас зі своїми ідеями та проектами, і «Профі Принт Запоріжжя»
                                з радістю надасть вам високоякісні блокноти...

                                Ми гарантує, що ви будете задоволені нашою роботою.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <CardsGrid />

                    <Footer t={t} lang={lang} />
                </div >
            </SidebarInset>
        </SidebarProvider>
    );
}
