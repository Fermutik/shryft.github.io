"use client";

import { useParams, notFound } from "next/navigation";
import BasePage from "../../../_page";
import { getT } from "@/lib/utils";
import { smallFormatItems } from "@/components/menu";

export default function Home() {
    const { slug, lang } = useParams();
    if (!lang || (lang !== "ua" && lang !== "ru")) {
        notFound();
    }
    const t = getT(lang, "page");

    if (typeof slug !== "string" || !smallFormatItems.some(item => item.title === slug)) {
        notFound();
    }

    return BasePage(
        { t, lang },
        { title: slug, form: true, image: false, post_article: true }
    );
}
