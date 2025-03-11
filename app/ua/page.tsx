"use client";

import BasePage from "../_home";
import { getT } from "@/lib/utils";

export default function Home() {
  const lang = 'ua';
  const t = getT(lang, "home");

  return BasePage(
    { t, lang },
    { title: "home", form: true }
  );
}
