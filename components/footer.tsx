import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils";
import Link from "next/link";
import { createLocalePath } from "./menu";

export const Footer = ({ lang }: BasePageProps) => {
    const t = getT(lang, "footer");
    const t_menu = getT(lang, "menu");


    return (
        <div className="flex flex-col w-full mt-4 bg-black text-white">
            {/* Top header area with title */}
            <div className="flex h-[50px] text-sm lg:text-lg items-center justify-center shadow-md bg-gray-900">
                <h2 className="text-center">{t("title")}</h2>
            </div>

            {/* Three-column content area */}
            <div className="flex justify-center items-center w-full mx-auto px-4 mb-4 mt-4">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-32 text-gray-400">
                    <div className="space-y-1">
                        <p><b>{t_menu("small-format")}</b></p>
                        <p><Link href={createLocalePath(lang, "presentations")} passHref>{t_menu("presentations")}</Link></p>
                        <p><Link href={createLocalePath(lang, "brochures")} passHref>{t_menu("brochures")}</Link></p>
                        <p><Link href={createLocalePath(lang, "architectural-projects")} passHref>{t_menu("architectural-projects")}</Link></p>
                        <p><Link href={createLocalePath(lang, "stickers-stickerpacks")} passHref>{t_menu("stickers-stickerpacks")}</Link></p>
                        <p><Link href={createLocalePath(lang, "bills")} passHref>{t_menu("bills")}</Link></p>
                        <p><Link href={createLocalePath(lang, "diplomas-acknowledgments")} passHref>{t_menu("diplomas-acknowledgments")}</Link></p>
                        <p><Link href={createLocalePath(lang, "catalogs")} passHref>{t_menu("catalogs")}</Link></p>
                        <p><Link href={createLocalePath(lang, "forms")} passHref>{t_menu("forms")}</Link></p>
                        <p><Link href={createLocalePath(lang, "badges")} passHref>{t_menu("badges")}</Link></p>
                        <p><Link href={createLocalePath(lang, "certificates")} passHref>{t_menu("certificates")}</Link></p>
                        <p><Link href={createLocalePath(lang, "postcards")} passHref>{t_menu("postcards")}</Link></p>
                        <p><Link href={createLocalePath(lang, "labels")} passHref>{t_menu("labels")}</Link></p>
                    </div>

                    <div className="space-y-1">
                        <p><b>{t_menu("large-format")}</b></p>
                        <p><Link href={createLocalePath(lang, "drawings")} passHref>{t_menu("drawings")}</Link></p>
                        <p><Link href={createLocalePath(lang, "tablets")} passHref>{t_menu("tablets")}</Link></p>
                        <p><Link href={createLocalePath(lang, "tracing-paper-print")} passHref>{t_menu("tracing-paper-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "posters")} passHref>{t_menu("posters")}</Link></p>
                        <p><Link href={createLocalePath(lang, "patterns")} passHref>{t_menu("patterns")}</Link></p>
                        <p><Link href={createLocalePath(lang, "self-adhesive-print")} passHref>{t_menu("self-adhesive-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "canvas-print")} passHref>{t_menu("canvas-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "oracal-print")} passHref>{t_menu("oracal-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "banner-print")} passHref>{t_menu("banner-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "spider-banner")} passHref>{t_menu("spider-banner")}</Link></p>
                        <p><Link href={createLocalePath(lang, "roll-up-banner")} passHref>{t_menu("roll-up-banner")}</Link></p>
                        <p><Link href={createLocalePath(lang, "photo-wallpaper")} passHref>{t_menu("photo-wallpaper")}</Link></p>
                    </div>

                    <div className="space-y-1">
                        <p><b>{t_menu("services")}</b></p>
                        <p><Link href={createLocalePath(lang, "color-print")} passHref>{t_menu("color-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "black-and-white-print")} passHref>{t_menu("black-and-white-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "large-format-print")} passHref>{t_menu("large-format-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "sheet-print")} passHref>{t_menu("sheet-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "lamination")} passHref>{t_menu("lamination")}</Link></p>
                        <p><Link href={createLocalePath(lang, "hard-cover")} passHref>{t_menu("hard-cover")}</Link></p>
                        <p><Link href={createLocalePath(lang, "soft-cover")} passHref>{t_menu("soft-cover")}</Link></p>
                        <p><Link href={createLocalePath(lang, "digital-banner-print")} passHref>{t_menu("digital-banner-print")}</Link></p>
                        <p><Link href={createLocalePath(lang, "plotter-cutting")} passHref>{t_menu("plotter-cutting")}</Link></p>
                        <p><Link href={createLocalePath(lang, "offset-printing")} passHref>{t_menu("offset-printing")}</Link></p>
                        <p><Link href={createLocalePath(lang, "post-print-processing")} passHref>{t_menu("post-print-processing")}</Link></p>
                        <p><Link href={createLocalePath(lang, "personalization")} passHref>{t_menu("personalization")}</Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};
