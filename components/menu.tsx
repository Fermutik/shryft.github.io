"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils";
import { MenuIcon } from "@/components/lucid_icons"

// Updated arrays with English titles based on the provided JSON mapping

export const smallFormatItems = [
    { title: "presentations", href: "/small-format/presentations" },
    { title: "brochures", href: "/small-format/brochures" },
    { title: "architectural-projects", href: "/small-format/architectural-projects" },
    { title: "stickers-stickerpacks", href: "/small-format/stickers-stickerpacks" },
    { title: "diplomas-acknowledgments", href: "/small-format/diplomas-acknowledgments" },
    { title: "catalogs", href: "/small-format/catalogs" },
    { title: "patterns", href: "/small-format/patterns" },
    { title: "forms", href: "/small-format/forms" },
    { title: "badges", href: "/small-format/badges" },
    { title: "certificates", href: "/small-format/certificates" },
    { title: "business-cards", href: "/small-format/business-cards" },
    { title: "postcards", href: "/small-format/postcards" },
    { title: "tags", href: "/small-format/tags" },
    { title: "calendars", href: "/small-format/calendars" },
    { title: "menu", href: "/small-format/menu" },
    { title: "price-tags", href: "/small-format/price-tags" },
    { title: "flyers", href: "/small-format/flyers" },
    { title: "booklets", href: "/small-format/booklets" },
    { title: "notepads", href: "/small-format/notepads" },
    { title: "hangers", href: "/small-format/hangers" },
    { title: "books", href: "/small-format/books" },
    { title: "envelopes", href: "/small-format/envelopes" },
    { title: "labels", href: "/small-format/labels" },
    { title: "shaped-paper-products", href: "/small-format/shaped-paper-products" },
];

export const largeFormatItems = [
    { title: "drawings", href: "/large-format/drawings" },
    { title: "tablets", href: "/large-format/tablets" },
    { title: "tracing-paper-print", href: "/large-format/tracing-paper-print" },
    { title: "posters-bills", href: "/large-format/posters-bills" },
    { title: "self-adhesive-print", href: "/large-format/self-adhesive-print" },
    { title: "photo-wallpaper", href: "/large-format/photo-wallpaper" },
    { title: "oracal-print", href: "/large-format/oracal-print" },
    { title: "banner-print", href: "/large-format/banner-print" },
    { title: "canvas-print", href: "/large-format/canvas-print" },
    { title: "spider-banner", href: "/large-format/spider-banner" },
    { title: "roll-up-banner", href: "/large-format/roll-up-banner" },
];

export const servicesItems = [
    { title: "color-print", href: "/services/color-print" },
    { title: "black-and-white-print", href: "/services/black-and-white-print" },
    { title: "large-format-print", href: "/services/large-format-print" },
    { title: "sheet-print", href: "/services/sheet-print" },
    { title: "lamination", href: "/services/lamination" },
    { title: "hard-cover", href: "/services/hard-cover" },
    { title: "soft-cover", href: "/services/soft-cover" },
    { title: "digital-banner-print", href: "/services/digital-banner-print" },
    { title: "plotter-cutting", href: "/services/plotter-cutting" },
    { title: "offset-printing", href: "/services/offset-printing" },
    { title: "post-print-processing", href: "/services/post-print-processing" },
    { title: "personalization", href: "/services/personalization" },
    { title: "film-applying", href: "/services/film-applying" },
    { title: "selection", href: "/services/selection" },
];

export const supportItems = [
    { title: "how-to-order", href: "/support/how-to-order" },
    { title: "get-a-quote", href: "/support/get-a-quote" },
    { title: "design-requirements", href: "/support/design-requirements" },
    { title: "how-to-pay", href: "/support/how-to-pay" },
    { title: "delivery", href: "/support/delivery" },
    { title: "materials-catalog", href: "/support/materials-catalog" },
];


export function SiteNavigationMenu({ t, lang }: BasePageProps) {
    t = getT(lang, "menu");
    return (
        <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark font-montserrat-alternates leading-none text-sm lg:text-base">
                        <MenuIcon menuKey={"small-format" as any} className="w-5 h-5 mr-2" />
                        {t("small-format")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[630px] lg:grid-cols-3">
                            {smallFormatItems.map((item) => (
                                <ListItem className="text-lg" key={item.title} iconKey={item.title} title={t(item.title)} href={"/" + lang + item.href}>
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark font-montserrat-alternates leading-none text-sm lg:text-base">
                        <MenuIcon menuKey={"large-format" as any} className="w-5 h-5 mr-2" />
                        {t("large-format")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[450px] gap-3 p-4 md:w-[510px] md:grid-cols-2 lg:w-[630px] lg:grid-cols-2">
                            {largeFormatItems.map((item) => (
                                <ListItem key={item.title} iconKey={item.title} title={t(item.title)} href={"/" + lang + item.href}>
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark font-montserrat-alternates leading-none text-sm lg:text-base">
                        <MenuIcon menuKey={"services" as any} className="w-5 h-5 mr-2" />
                        {t("services")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[550px] gap-3 p-4 md:w-[630px] md:grid-cols-2 lg:w-[755px] ">
                            {servicesItems.map((item) => (
                                <ListItem key={item.title} iconKey={item.title} title={t(item.title)} href={"/" + lang + item.href} />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark font-montserrat-alternates leading-none text-sm lg:text-base">
                        <MenuIcon menuKey={"support" as any} className="w-5 h-5 mr-2" />
                        {t("support")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[700px] gap-3 p-4 md:w-[770px] md:grid-cols-2 lg:w-[915px]">
                            {supportItems.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={t(item.title)}
                                    iconKey={item.title}
                                    href={"/" + lang + item.href}
                                />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="dark font-montserrat-alternates leading-none ">
                    <Link href={"/" + lang + "/contacts"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle() + "text-sm lg:text-base"}>
                            <div className="flex items-center font-medium text-sm lg:text-base">
                                <MenuIcon menuKey={"contacts" as any} className="w-5 h-5 mr-2 text-accent-foreground" />
                                {t("contacts")}
                            </div>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

// Define the props for ListItem including a new `iconKey` prop.
type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    iconKey?: string; // Make iconKey optional
    children?: React.ReactNode;
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    ListItemProps
>(({ className, title, iconKey, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2">
                        {/* Render the icon next to the title if available.
                Added 'flex-shrink-0' to ensure the icon maintains its size even if the title wraps. */}
                        {iconKey && (
                            <MenuIcon
                                menuKey={iconKey as any}
                                className="w-4 h-4 flex-shrink-0"
                            />
                        )}
                        <div className="text-sm font-bold leading-none">
                            {title}
                        </div>
                    </div>
                    {children && (
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    )}
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";



