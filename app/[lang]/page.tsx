"use client";

import BasePage from "../_home";

import { useParams, notFound } from "next/navigation";
import { getT } from "@/lib/utils";

export default function Home() {
  const { lang } = useParams();
  if (!lang || (lang !== "ua" && lang !== "ru")) {
    notFound();
  }
  const t = getT(lang as string, "home");

  return BasePage(
    { t, lang },
    { title: "home", form: true }
  );
}
