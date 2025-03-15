"use client";

import BasePage from "../../_page";
import { useParams, notFound } from "next/navigation";
import { getT } from "@/lib/utils";

export default function Home() {
    const { slug, lang } = useParams();
    if (!lang || (lang !== "ua" && lang !== "ru")) {
        notFound();
    }
    const t = getT(lang, "page");

    return BasePage(
        { t, lang },
        { title: "contacts", form: false, image: false, post_article: false, carousel: false, accordion_public: false }
    );
}
