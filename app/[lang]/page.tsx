import HomePage from "../_home";

import { notFound } from "next/navigation";
import { getT } from "@/lib/utils";
import { Post } from "../_page";

// Generate static routes at build time:
export async function generateStaticParams() {
  // Possible languages
  const langs = ["ua", "ru"];

  // Generate all combinations of { lang, slug }
  const params: Array<{ lang: string }> = [];


  for (const lang of langs) {
    params.push({ lang });
  }

  return params;
}

export default async function CustomPage({
  params,
}: {
  params: any;
}) {
  // Ensure params is treated as a Promise and then cast to the expected type
  const { lang } = (await Promise.resolve(params)) as { lang: string };

  if (!lang || (lang !== "ua" && lang !== "ru")) {
    notFound();
  }

  return HomePage(
    { lang },
  );
}
