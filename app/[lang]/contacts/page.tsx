import BasePage, { getStaticProps, makeBreadcrumbs, Post } from "../../_page";
import { notFound } from "next/navigation";
import { getT } from "@/lib/utils";

// Generate static routes at build time:
export async function generateStaticParams() {
    // Possible languages
    const langs = ["ua", "ru"];

    // Generate all combinations of { lang, slug }
    const params: Array<{ lang: string; }> = [];
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
    const t = getT(lang, "page");

    const breadcrumbs = makeBreadcrumbs(lang, "contacts");

    const staticProps = await getStaticProps();
    const { posts } = staticProps.props as { posts: Post[] };

    const filteredPosts = posts.filter(
        (p: Post) => p.lang === lang && p.section === "contacts"
    );

    // If no posts are found, show a 404 page
    if (filteredPosts.length === 0) {
        notFound();
    }

    return BasePage(
        { lang, breadcrumbs },
        { title: "contacts", form: false, image: false, post_article: false, carousel: false, accordion_public: false, posts: filteredPosts }
    );
}
