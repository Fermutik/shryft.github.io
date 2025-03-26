import { notFound } from "next/navigation";
import BasePage, { getStaticProps, makeBreadcrumbs, Post } from "../../../_page";
import { getT } from "@/lib/utils";
import { blogItems } from "@/components/menu";

// Generate static routes at build time:
export async function generateStaticParams() {
    // Possible languages
    const langs = ["ua", "ru"];
    // Possible slugs
    const slugs = blogItems.map(item => item.title);

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
    params: any;
}) {
    // Ensure params is treated as a Promise and then cast to the expected type
    const { lang, slug } = (await Promise.resolve(params)) as { lang: string; slug: string };

    if (!lang || (lang !== "ua" && lang !== "ru")) {
        notFound();
    }

    if (!blogItems.some(item => item.title === slug)) {
        notFound();
    }
    const staticProps = await getStaticProps();
    const { posts } = staticProps.props as { posts: Post[] };

    // Filter posts for the current language, section "blog", and matching slug
    const filteredPosts = posts.filter(
        (p: Post) => p.lang === lang && p.section === "blog" && p.slug === slug
    );

    // If no posts are found, show a 404 page
    if (filteredPosts.length === 0) {
        notFound();
    }

    const t = getT(lang, "page");
    const breadcrumbs = makeBreadcrumbs(lang, "blog", slug);

    return BasePage(
        { lang, breadcrumbs },
        { title: slug, form: true, image: true, carousel: false, posts: filteredPosts }
    );
}

export const dynamicParams = false;
