import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BasePageProps } from "./_page";
import { CardsGrid } from "@/components/cards-grid";
import { HeroSection } from "@/components/hero";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';


export interface HomeItem {
    title: string;
    image: string;
    article: any;
    cardsData: CardData[];
}

export async function getHomePosts(lang: string = "ua") {
    // Define the home directory for the specified language
    const homeDir = path.join(process.cwd(), "markdown", lang, "home");
    const posts = [];

    if (fs.existsSync(homeDir) && fs.statSync(homeDir).isDirectory()) {
        // Read all MDX files in the "home" directory
        const files = fs.readdirSync(homeDir);
        for (const file of files) {
            if (file.endsWith(".mdx")) {
                const filePath = path.join(homeDir, file);
                const fileContent = fs.readFileSync(filePath, "utf8");
                const matterResult = matter(fileContent);

                // Use remark to convert markdown into an HTML string
                const processedContent = await remark()
                    .use(html)
                    .process(matterResult.content);
                const contentHtml = processedContent.toString();

                posts.push({
                    lang,              // Language (e.g., 'ua')
                    section: "home",   // Section is fixed as "home"
                    slug: null,        // No slug since files are at the section level
                    filename: file,
                    content: contentHtml,
                    frontMatter: matterResult.data,
                });
            }
        }
    }

    return { posts };
}


export interface CardData {
    title: string;
    image: string;
    description: string;
}

const cardsData = [
    {
        title: "presentations",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для каталогов. Здесь будет вторая часть описания.",
    },
    {
        title: "brochures",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для лекал. Здесь будет вторая часть описания.",
    },
    {
        title: "booklets",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для бланков. Здесь будет вторая часть описания.",
    },
    {
        title: "hangers",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для бейджей. Здесь будет вторая часть описания.",
    },
    {
        title: "books",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для сертификатов. Здесь будет вторая часть описания.",
    },
    {
        title: "catalogs",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для визиток. Здесь будет вторая часть описания.",
    },
    {
        title: "patterns",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для листовок. Здесь будет вторая часть описания.",
    },
    {
        title: "badges",
        image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
        description:
            "Это описание для бирок. Здесь будет вторая часть описания.",
    },
]

export const homeItems: HomeItem[] = [
    { title: "small-format", article: null, image: "small-format.jpg", cardsData: cardsData },
    { title: "large-format", article: null, image: "large-format.png", cardsData: cardsData },
    { title: "services", article: null, image: "services.png", cardsData: cardsData },
]

export default async function HomePage({ lang }: BasePageProps) {
    const posts = await getHomePosts(lang);

    const homeItemsWithArticles: HomeItem[] = homeItems.map(item => ({
        ...item,
        article: posts.posts.find(post => {
            const fileNameWithoutExt = post.filename.replace(/\.[^/.]+$/, "");
            return fileNameWithoutExt === item.title;
        })?.content || null,
    }));

    return (
        <SidebarProvider>
            <AppSidebar lang={lang} />
            <SidebarInset>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100">
                    <Navbar lang={lang} />
                    <img
                        src="/home/banner.png"
                        srcSet="
                            /home/banner.png 1920w,
                            /home/banner-1536.png 1536w,
                            /home/banner-1200.png 1200w,
                            /home/banner-768.png 768w,
                            /home/banner-600.png 600w,
                        "
                        sizes="(max-width: 720px) 100vw, (max-width: 960px) 100vw, 1920px"
                        width="1920"
                        height="600"
                        alt="banner"
                        className="alignnone size-full hidden lg:block"
                    ></img>
                    <CardsGrid lang={lang} item={homeItemsWithArticles[0]} />
                    <CardsGrid lang={lang} item={homeItemsWithArticles[1]} />
                    <CardsGrid lang={lang} item={homeItemsWithArticles[2]} />
                    <HeroSection lang={lang} />
                    <Footer lang={lang} />
                </div >
            </SidebarInset>
        </SidebarProvider>
    );
}
