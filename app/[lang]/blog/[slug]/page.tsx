"use client";

import { useParams, notFound } from "next/navigation";
import BasePage from "../../../_page";
import { getT } from "@/lib/utils";
import { blogItems } from "@/components/menu";

export default function Home() {
    const { slug, lang } = useParams();

    if (!lang || (lang !== "ua" && lang !== "ru")) {
        notFound();
    }

    if (typeof slug !== "string" || !blogItems.some(item => item.title === slug)) {
        notFound();
    }

    const t = getT(lang, "page");

    return BasePage(
        { t, lang },
        { title: slug, form: true, image: false, post_article: false, carousel: false }
    );
}