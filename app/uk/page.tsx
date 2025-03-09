"use client";

import React from "react";
import BasePage from "../_page";
import { getT } from "@/lib/utils";

export default function Home() {
  const lang = 'uk';
  const t = getT(lang, "home");

  return (
    <BasePage
      t={t}
      lang={lang}
    />
  );
}
