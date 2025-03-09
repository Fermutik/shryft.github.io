"use client";

import React from "react";

// UI components imports (shared)
import {
    Accordion,
    AccordionHide,
    AccordionItem,
    AccordionTrigger,
    AccordionPublic,
} from "@/components/ui/accordion";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { CarouselSize } from "@/components/carousel";
import { ZakazForm } from "@/components/zakaz-form";

import ZakazPublicUa from "@/markdown/ua/zakaz_public.mdx";
import ZakazHideUa from "@/markdown/ua/zakaz_hide.mdx";
import ZakazPublicRu from "@/markdown/ru/zakaz_public.mdx";
import ZakazHideRu from "@/markdown/ru/zakaz_hide.mdx";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BasePageProps {
    t: (key: string) => string;
    lang: string;
}

export default function BasePage({ t, lang }: BasePageProps) {

    const ZakazPublic = lang === 'ua' ? ZakazPublicUa : ZakazPublicRu;
    const ZakazHide = lang === 'ua' ? ZakazHideUa : ZakazHideRu;

    return (
        <div className="flex flex-col">
            <Navbar t={t} lang={lang} />
            <div className="flex flex-row w-[797px] ml-[210px] justify-between">
                <div className="flex flex-col text-center mt-22">
                    <Image
                        src="/notepad.png"
                        width={190}
                        height={260}
                        alt="Picture of the author"
                    />
                </div>
                <div className="ml-[10px] mt-2">
                    <h1>Блокноти</h1>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={"/" + lang}>ГОЛОВНА</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={"/" + lang}>ПОСЛУГИ</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                БЛОКНОТИ
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h2 className="scroll-m-20 text-xl mt-4 font-bold mb-2">
                        {t("orderNotebooksTitle")}
                    </h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionPublic className="dark:text-gray-200">
                                <ZakazPublic />
                            </AccordionPublic>
                            <AccordionHide>
                                <ZakazHide />
                            </AccordionHide>
                            <AccordionTrigger />
                        </AccordionItem>
                    </Accordion>
                    <Separator className="mb-4" />
                    <h2 className="scroll-m-20 text-xl font-bold mb-2">
                        {t("orderNotebooksPrintTitle")}
                    </h2>
                    <ZakazForm t={t} lang={lang} />
                    <Separator className="mb-4" />
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionPublic className="dark:text-gray-200">
                                <ZakazPublic />
                            </AccordionPublic>
                            <AccordionHide>
                                <ZakazHide />
                            </AccordionHide>
                            <AccordionTrigger />
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="flex flex-col w-[797px] ml-[210px] mt-2">
                <h2 className="scroll-m-20 text-xl font-bold mx-2 mb-2">
                    {t("alsoWeDo")}
                </h2>
                <CarouselSize t={t} lang={lang} />
            </div>
            <Footer t={t} lang={lang} />
        </div >
    );
}
