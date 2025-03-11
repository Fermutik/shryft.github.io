"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Slash } from "lucide-react"

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
import { getT } from "@/lib/utils";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import MenuIcon from "@/components/lucid_icons";

export interface BasePageProps {
    t: (key: string) => string;
    lang: string;
}

export interface BasePageSettings {
    title: string;
    form: boolean;
    image: boolean;
    post_article: boolean;
}

export default function BasePage({ t, lang }: BasePageProps, { title, form, image, post_article }: BasePageSettings) {

    const ZakazPublic = lang === 'ua' ? ZakazPublicUa : ZakazPublicRu;
    const ZakazHide = lang === 'ua' ? ZakazHideUa : ZakazHideRu;

    const t_menu = getT(lang, "menu");

    const pathname = usePathname();

    const breadcrumbs = useMemo(() => {
        const segments = pathname.split("/").filter(Boolean);
        // Assume first segment is language; start breadcrumbs with home.
        const crumbs = [{ label: "ГОЛОВНА", href: `/${lang}` }];
        let pathAcc = `/${lang}`;
        // Process segments from index 1 onward.
        for (let i = 1; i < segments.length; i++) {
            pathAcc += `/${segments[i]}`;
            // Use t_menu for translation if available.
            crumbs.push({ label: (getT(lang, "menu")(segments[i]) || segments[i]).toUpperCase(), href: pathAcc });
        }
        return crumbs;
    }, [pathname, lang]);

    console.log("Title: ", title, title + ".png");

    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar t={t} lang={lang} />
            <div className="flex flex-row justify-start">
                <div className="flex-col items-center text-center mt-20 hidden lg:block px-8">
                    {image ? (
                        // When 'image' is true, render the custom Image component
                        <Image
                            src={"/" + title + ".png"}
                            width={360}
                            height={504}
                            alt={t_menu(title)}
                        />
                    ) : (
                        title === "notepads" ? (
                            <Image
                                src={"/" + title + ".png"}
                                width={360}
                                height={504}
                                alt={t_menu(title)}
                            />
                        ) : (
                            // When 'image' is false, render the standard HTML <img> element
                            <img
                                src="https://placehold.co/350x400/cccccc/ffffff?Image+Placeholder"
                                width="350"
                                height="400"
                                alt={t_menu(title)}
                            />
                        )
                    )}
                </div>
                <div className="ml-[10px] mt-2">
                    <h1 className="text-2xl lg:text-3xl flex items-center">
                        <MenuIcon menuKey={title as any} className="w-6 mr-1 text-muted-foreground" />
                        {t_menu(title)}</h1>
                    <Breadcrumb className="text-xs lg:text-sm mb-4">
                        <BreadcrumbList>
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && (
                                        <BreadcrumbSeparator>
                                            <Slash />
                                        </BreadcrumbSeparator>
                                    )}
                                    {index < breadcrumbs.length - 1 ? (
                                        <BreadcrumbItem>
                                            {crumb.label}
                                        </BreadcrumbItem>
                                    ) : (
                                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                    )}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
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
                    {form && (
                        <>
                            <h2 className="scroll-m-20 text-xl lg:text-2xl font-bold mb-2">
                                {t("orderNotebooksPrintTitle")}
                            </h2>
                            <ZakazForm t={t} lang={lang} />
                        </>
                    )}
                    <Separator className="mb-4" />
                    {post_article && (
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
                    )}
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
