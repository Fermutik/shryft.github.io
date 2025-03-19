import { notFound } from "next/navigation";
import BasePage, { getStaticProps, makeBreadcrumbs, Post } from "../../../_page";
import { getT } from "@/lib/utils";
import { supportItems } from "@/components/menu";

// Generate static routes at build time:
export async function generateStaticParams() {
    // Possible languages
    const langs = ["ua", "ru"];
    // Possible slugs
    const slugs = supportItems.map(item => item.title);

    // Generate all combinations of { lang, slug }
    const params: Array<{ lang: string; slug: string }> = [];
    for (const lang of langs) {
        for (const slug of slugs) {
            params.push({ lang, slug });
        }
    }

    return params;
}

export default async function CustomPage({
    params,
}: {
    params: { lang: string; slug: string };
}) {
    const resolvedParams = await params;
    const { lang, slug } = resolvedParams;

    if (!lang || (lang !== "ua" && lang !== "ru")) {
        notFound();
    }

    const t = getT(lang, "page");

    // Check slug
    if (!supportItems.some(item => item.title === slug)) {
        notFound();
    }

    const staticProps = await getStaticProps();
    const { posts } = staticProps.props as { posts: Post[] };

    // Filter posts for the current language, section "blog", and matching slug
    const filteredPosts = posts.filter(
        (p: Post) => p.lang === lang && p.section === "support" && p.slug === slug
    );

    // If no posts are found, show a 404 page
    if (filteredPosts.length === 0) {
        notFound();
    }

    const breadcrumbs = makeBreadcrumbs(lang, "support", slug);

    return BasePage(
        { lang, breadcrumbs },
        { title: slug, form: true, image: false, post_article: false, posts: filteredPosts }
    );
}
