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
import { Separator } from "@/components/ui/separator";
import { CarouselSize } from "@/components/carousel";
import { ZakazForm } from "@/components/zakaz-form";

import ZakazPublicUk from "@/markdown/uk/zakaz_public.mdx";
import ZakazHideUk from "@/markdown/uk/zakaz_hide.mdx";
import ZakazPublicRu from "@/markdown/ru/zakaz_public.mdx";
import ZakazHideRu from "@/markdown/ru/zakaz_hide.mdx";

interface BasePageProps {
    t: (key: string) => string;
    lang: string;
}

export default function BasePage({ t, lang }: BasePageProps) {

    const ZakazPublic = lang === 'uk' ? ZakazPublicUk : ZakazPublicRu;
    const ZakazHide = lang === 'uk' ? ZakazHideUk : ZakazHideRu;

    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-[797px] ml-[210px] mt-8">
                <div className="w-[240px]">
                    <img
                        src="https://placehold.co/190x310/cccccc/ffffff?Image+Placeholder"
                        alt="Placeholder"
                    />
                </div>
                <div className="ml-[10px]">
                    <h2 className="scroll-m-20 text-xl font-bold mb-2">
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
                    <ZakazForm />
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
                <CarouselSize />
            </div>
        </div>
    );
}
