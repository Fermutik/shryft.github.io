"use client";

import HomePage from "../_home";

import { useParams, notFound } from "next/navigation";
import { getT } from "@/lib/utils";

export default function Home() {
  const { lang } = useParams();
  if (!lang || (lang !== "ua" && lang !== "ru")) {
    notFound();
  }
  const t = getT(lang as string, "home");

  return HomePage(
    { t, lang },
  );
}
