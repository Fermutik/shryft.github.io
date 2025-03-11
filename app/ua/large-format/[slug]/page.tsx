"use client";

import { useParams, notFound } from "next/navigation";
import BasePage from "../../../_page";
import { getT } from "@/lib/utils";
import { largeFormatItems } from "@/components/menu";

export default function Home() {
    const lang = "ua";
    const t = getT(lang, "page");
    const { slug } = useParams();

    if (typeof slug !== "string" || !largeFormatItems.some(item => item.title === slug)) {
        notFound();
    }

    return BasePage(
        { t, lang },
        { title: slug, form: true, image: false, post_article: true }
    );
}
