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
import { getT } from "@/lib/utils";

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
            if (file.endsWith(".md")) {
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
    description: string;
    image: any;
}

const cardsData01 = [
    { title: "presentations", description: "presentations-desc", image: null },
    { title: "architectural-projects", description: "architectural-projects-desc", image: null },
    { title: "stickers-stickerpacks", description: "stickers-stickerpacks-desc", image: null },
    { title: "bills", description: "bills-desc", image: null },
    { title: "diplomas-acknowledgments", description: "diplomas-acknowledgments-desc", image: null },
    { title: "catalogs", description: "catalogs-desc", image: null },
    { title: "badges", description: "badges-desc", image: null },
    { title: "postcards", description: "postcards-desc", image: null },
];

const cardsData02 = [
    { title: "drawings", description: "drawings-desc", image: null },
    { title: "tablets", description: "tablets-desc", image: null },
    { title: "tracing-paper-print", description: "tracing-paper-print-desc", image: null },
    { title: "posters", description: "posters-desc", image: null },
    { title: "patterns", description: "patterns-desc", image: null },
    { title: "self-adhesive-print", description: "self-adhesive-print-desc", image: null },
    { title: "canvas-print", description: "canvas-print-desc", image: null },
    { title: "oracal-print", description: "oracal-print-desc", image: null },
];

const cardsData03 = [
    { title: "color-print", description: "color-print-desc", image: null },
    { title: "large-format-print", description: "large-format-print-desc", image: null },
    { title: "sheet-print", description: "sheet-print-desc", image: null },
    { title: "lamination", description: "lamination-desc", image: null },
    { title: "hard-cover", description: "hard-cover-desc", image: null },
    { title: "soft-cover", description: "soft-cover-desc", image: null },
    { title: "digital-banner-print", description: "digital-banner-print-desc", image: null },
    { title: "plotter-cutting", description: "plotter-cutting-desc", image: null },
];

export const homeItems: HomeItem[] = [
    { title: "small-format", article: null, image: "small-format.jpg", cardsData: cardsData01 },
    { title: "large-format", article: null, image: "large-format.png", cardsData: cardsData02 },
    { title: "services", article: null, image: "services.png", cardsData: cardsData03 },
];

export default async function HomePage({ lang }: BasePageProps) {
    const posts = await getHomePosts(lang);

    // Match each home item with its corresponding article (if exists)
    const homeItemsWithArticles: HomeItem[] = homeItems.map(item => ({
        ...item,
        article: posts.posts.find(post => {
            const fileNameWithoutExt = post.filename.replace(/\.[^/.]+$/, "");
            return fileNameWithoutExt === item.title;
        })?.content || null,
    }));

    // Prepare the image src for each HomeItem and for each card inside cardsData
    const homeItemsPrepared = homeItemsWithArticles.map(item => {
        // Prepare image for each card in cardsData
        const preparedCardsData = item.cardsData.map(card => {
            // Construct path: /public/cards-grid/<homeItem.title>/<card.title>.png
            const cardImagePath = path.join(
                process.cwd(),
                "public",
                "home",
                "cards-grid",
                item.title,
                `${card.title}.png`
            );
            const preparedCardImage = fs.existsSync(cardImagePath)
                ? `/home/cards-grid/${item.title}/${card.title}.png`
                : "https://placehold.co/250x150/cccccc/ffffff";
            card.image = preparedCardImage;
            return { ...card };
        });
        return { ...item, cardsData: preparedCardsData };
    });

    const t = getT(lang, "home");


    return (
        <SidebarProvider>
            <AppSidebar lang={lang} />
            <SidebarInset>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100">
                    <Navbar lang={lang} />
                    <div className="relative w-full">
                        {/* Banner image (without text) */}
                        <img
                            src="/home/banner.png"
                            width="1920"
                            height="600"
                            alt="banner"
                            className="w-full h-auto object-cover alignnone size-full hidden lg:block"
                        />

                        {/* Orange background and text overlay (spans the full width) */}
                        <div className="absolute bottom-6 right-0 bg-orange-500 text-black px-4 py-2 text-start hidden lg:block">
                            <p className="text-sm md:text-text-base lg:text-lg xl:text-xl 2xl:text-2xl px-4 whitespace-nowrap">
                                {t("banner")}
                            </p>
                        </div>
                    </div>
                    <CardsGrid lang={lang} item={homeItemsPrepared[0]} />
                    <CardsGrid lang={lang} item={homeItemsPrepared[1]} />
                    <CardsGrid lang={lang} item={homeItemsPrepared[2]} />
                    <HeroSection lang={lang} />
                    <Footer lang={lang} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
