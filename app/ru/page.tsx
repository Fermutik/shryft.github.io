"use client";

import BasePage from "../_home";
import { getT } from "@/lib/utils";

export default function Home() {
  const lang = 'ru';
  const t = getT(lang, "home");

  return BasePage(
    { t, lang },
    { title: "home", form: true }
  );
}
