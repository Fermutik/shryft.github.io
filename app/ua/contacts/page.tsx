"use client";

import BasePage from "../../_page";
import { getT } from "@/lib/utils";

export default function Home() {
    const lang = 'ua';
    const t = getT(lang, "page");

    return BasePage(
        { t, lang },
        { title: "contacts", form: false, image: false, post_article: false }
    );
}
