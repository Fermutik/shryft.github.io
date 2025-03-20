import React from "react";
import { Slash } from "lucide-react"

// UI components imports (shared)
import {
    Accordion,
    AccordionHide,
    AccordionItem,
    AccordionTrigger,
    AccordionPublic,
} from "@/components/ui/accordion";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { CarouselSize } from "@/components/carousel";
import { ZakazForm } from "@/components/zakaz-form";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getT } from "@/lib/utils";
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BasePageProps {
    lang: string;
    breadcrumbs?: Array<{ label: string; href: string }>;
}

// Define the Post interface to type the posts array
export interface Post {
    lang: string;
    section: string;
    slug: string | null;
    filename: string;
    content: any;
    image: string | null;
}

export interface BasePageSettings {
    title: string;
    form: boolean;
    image: boolean;
    post_article: boolean;
    carousel?: boolean;
    accordion_public?: boolean;
    posts: Post[];
}

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticProps() {
    // Define the base directory for markdown files
    const markdownDir = path.join(process.cwd(), "markdown");
    // Initialize an array to hold all post objects
    const posts = [];

    // Read all language directories (e.g., 'ua', 'ru')
    const languages = fs.readdirSync(markdownDir);
    for (const lang of languages) {
        const langPath = path.join(markdownDir, lang);
        if (fs.statSync(langPath).isDirectory()) {
            // Read all section directories (e.g., 'services', 'home', 'blog')
            const sections = fs.readdirSync(langPath);
            for (const section of sections) {
                const sectionPath = path.join(langPath, section);
                if (fs.statSync(sectionPath).isDirectory()) {
                    // Read all items in the section directory.
                    // Items can be MDX files directly in the section or subdirectories (slug directories).
                    const items = fs.readdirSync(sectionPath);
                    for (const item of items) {
                        const itemPath = path.join(sectionPath, item);
                        const stats = fs.statSync(itemPath);
                        if (stats.isFile() && item.endsWith(".md")) {
                            // MDX file directly in the section (no slug)
                            const fileContent = fs.readFileSync(itemPath, "utf8");
                            const matterResult = matter(fileContent);

                            // Use remark to convert markdown into HTML string
                            const processedContent = await remark()
                                .use(html)
                                .process(matterResult.content);
                            const contentHtml = processedContent.toString();
                            posts.push({
                                lang,         // Language (e.g., 'ua')
                                section,      // Section (e.g., 'services')
                                slug: null,   // No slug because file is at the section level
                                filename: item,
                                content: contentHtml,
                                image: null,
                            });
                        } else if (stats.isDirectory()) {
                            // Item is a directory, treat it as a slug directory
                            const slug = item;
                            // Read all MDX files within this slug directory
                            const files = fs.readdirSync(itemPath);
                            for (const file of files) {
                                if (file.endsWith(".md")) {
                                    const filePath = path.join(itemPath, file);
                                    const fileContent = fs.readFileSync(filePath, "utf8");
                                    const matterResult = matter(fileContent);

                                    // Use remark to convert markdown into HTML string
                                    const processedContent = await remark()
                                        .use(html)
                                        .process(matterResult.content);
                                    const contentHtml = processedContent.toString();

                                    const ImagePath = path.join(process.cwd(), "public", section, slug + ".png");
                                    const Image = fs.existsSync(ImagePath) && "/" + section + "/" + slug + ".png"
                                    posts.push({
                                        lang,         // Language (e.g., 'ua')
                                        section,      // Section (e.g., 'services')
                                        slug,         // Slug (e.g., 'black-and-white-print')
                                        filename: file,
                                        content: contentHtml,
                                        image: Image,
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    // Return the array of posts as props
    return {
        props: {
            posts,
        },
    };
}

export function makeBreadcrumbs(lang: string, rootSegment: string, slug?: string) {
    const t_menu = getT(lang, "menu");

    const crumbs = [
        {
            label: t_menu("main").toUpperCase(),
            href: `/${lang}`,
        },
        {
            label: (t_menu(rootSegment) || rootSegment).toUpperCase(),
            href: `/${lang}/${rootSegment}`,
        },
    ];

    if (slug) {
        crumbs.push({
            label: (t_menu(slug) || slug).toUpperCase(),
            href: `/${lang}/${rootSegment}/${slug}`,
        });
    }

    return crumbs;
}

export default function BasePage(
    { lang, breadcrumbs = [] }: BasePageProps,
    {
        title,
        form,
        image,
        post_article,
        carousel = true,
        accordion_public = true,
        posts,
    }: BasePageSettings
) {
    // Extract MDX content for public and hidden articles based on filename
    const publicArticle = posts.find(
        (post) => post.filename === "article-public.md"
    );
    const hideArticle = posts.find(
        (post) => post.filename === "article-hide.md"
    );

    const image_src =
        posts.find((post) => post.image)?.image

    const t_menu = getT(lang, "menu");

    const t = getT(lang, "page");

    return (
        <SidebarProvider>
            <AppSidebar lang={lang} />
            <SidebarInset>
                <div className="flex flex-col justify-center items-center">
                    <Navbar lang={lang} />
                    <div className="flex flex-row justify-start">
                        {image && (
                            <div className="flex-col items-center text-center mt-20 hidden lg:block px-8">
                                {image_src ? (
                                    <Image
                                        src={image_src}
                                        width={350}
                                        height={350}
                                        alt={t_menu(title)}
                                    />) : (<img
                                        src="https://placehold.co/350x350/cccccc/ffffff"
                                        width="350"
                                        height="350"
                                        alt={t_menu(title)}
                                    />)}
                            </div>
                        )}
                        <div className="ml-[10px] mt-2">
                            <h1 className="text-2xl lg:text-3xl flex items-center">
                                {t_menu(title)}
                            </h1>
                            <Breadcrumb className="text-xs lg:text-sm mb-4">
                                <BreadcrumbList>
                                    {breadcrumbs.map((crumb, index) => (
                                        <React.Fragment key={index}>
                                            {index > 0 && (
                                                <BreadcrumbSeparator>
                                                    <Slash />
                                                </BreadcrumbSeparator>
                                            )}
                                            {index < breadcrumbs.length - 1 ? (
                                                <BreadcrumbItem>
                                                    <BreadcrumbLink href={crumb.href}>
                                                        {crumb.label}
                                                    </BreadcrumbLink>
                                                </BreadcrumbItem>
                                            ) : (
                                                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                            <Separator />
                            {accordion_public ? (
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionPublic className="dark:text-gray-200">
                                            {publicArticle ? (
                                                <div dangerouslySetInnerHTML={{ __html: publicArticle.content }} />
                                            ) : (
                                                <div>Public article not found</div>
                                            )}
                                        </AccordionPublic>
                                        <AccordionHide>
                                            {hideArticle ? (
                                                <div dangerouslySetInnerHTML={{ __html: hideArticle.content }} />
                                            ) : (
                                                <div>Hidden article not found</div>
                                            )}
                                        </AccordionHide>
                                        <AccordionTrigger
                                            collapsedLabel={t("readMore")}
                                            expandedLabel={t("close")}
                                        />
                                    </AccordionItem>
                                </Accordion>
                            ) : (
                                <div className="prose">
                                    {publicArticle ? (
                                        <div dangerouslySetInnerHTML={{ __html: publicArticle.content }} />
                                    ) : (
                                        <div>Public article not found</div>
                                    )}
                                </div>
                            )}
                            {form && (
                                <>
                                    <h2 className="scroll-m-20 text-xl lg:text-2xl font-bold mb-2">
                                        {t("orderNotebooksPrintTitle")}
                                    </h2>
                                    <ZakazForm lang={lang} />
                                </>
                            )}
                            {post_article && (
                                <>
                                    <Separator className="mb-4" />
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionPublic className="dark:text-gray-200">
                                                {publicArticle ? (
                                                    <div dangerouslySetInnerHTML={{ __html: publicArticle.content }} />
                                                ) : (
                                                    <div>Public article not found</div>
                                                )}
                                            </AccordionPublic>
                                            <AccordionHide>
                                                {hideArticle ? (
                                                    <div dangerouslySetInnerHTML={{ __html: hideArticle.content }} />
                                                ) : (
                                                    <div>Hidden article not found</div>
                                                )}
                                            </AccordionHide>
                                            <AccordionTrigger
                                                collapsedLabel={t("readMore")}
                                                expandedLabel={t("close")}
                                            />
                                        </AccordionItem>
                                    </Accordion>
                                </>
                            )}
                        </div>
                    </div>
                    {carousel && (
                        <div className="flex-col justify-start mt-2 hidden xl:block">
                            <h2 className="scroll-m-20 text-2xl font-bold mx-2">
                                {t("alsoWeDo")}
                            </h2>
                            <CarouselSize lang={lang} />
                        </div>
                    )}
                    <Footer lang={lang} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}