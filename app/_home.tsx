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
}

export default function BasePage({ t, lang }: BasePageProps, { title, form }: BasePageSettings) {

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

    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar t={t} lang={lang} />
            <div className="flex flex-row justify-start w-full h-screen"></div>
            <Footer t={t} lang={lang} />
        </div >
    );
}
