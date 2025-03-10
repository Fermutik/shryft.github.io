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
        <div className="flex flex-col justify-center items-center">
            <Navbar t={t} lang={lang} />
            <div className="flex flex-row justify-start">
                <div className="flex-col items-center text-center mt-12 hidden lg:block px-8">
                    <Image
                        src="/notebook.png"
                        width={380}
                        height={504}
                        alt="Picture of the author"
                    />
                </div>
                <div className="ml-[10px] mt-2">
                    <h1 className="text-2xl lg:text-3xl">Блокноти</h1>
                    <Breadcrumb className="text-xs lg:text-sm">
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
                    <h2 className="scroll-m-20 text-xl lg:text-2xl mt-4 font-bold mb-2">
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
                            <AccordionTrigger collapsedLabel={t("readMore")} expandedLabel={t("close")} />
                        </AccordionItem>
                    </Accordion>
                    <Separator className="mb-4" />
                    <h2 className="scroll-m-20 text-xl lg:text-2xl font-bold mb-2">
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
                            <AccordionTrigger collapsedLabel={t("readMore")} expandedLabel={t("close")} />
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="flex-col justify-start mt-2 hidden xl:block">
                <h2 className="scroll-m-20 text-2xl font-bold mx-2 mb-2">
                    {t("alsoWeDo")}
                </h2>
                <CarouselSize t={t} lang={lang} />
            </div>
            <Footer t={t} lang={lang} />
        </div >
    );
}
