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

// Updated arrays with English titles based on the provided JSON mapping

export const smallFormatItems = [
    { title: "presentations", href: "/small-format/presentations" },
    { title: "brochures", href: "/small-format/brochures" },
    { title: "architectural-projects", href: "/small-format/architectural-projects" },
    { title: "stickers-stickerpacks", href: "/small-format/stickers-stickerpacks" },
    { title: "diplomas-acknowledgments", href: "/small-format/diplomas-acknowledgments" },
    { title: "catalogs", href: "/small-format/catalogs" },
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
    { title: "notebooks", href: "/small-format/notebooks" },
    { title: "bills", href: "/small-format/bills" },
];

export const largeFormatItems = [
    { title: "drawings", href: "/large-format/drawings" },
    { title: "tablets", href: "/large-format/tablets" },
    { title: "patterns", href: "/large-format/patterns" },
    { title: "tracing-paper-print", href: "/large-format/tracing-paper-print" },
    { title: "posters", href: "/large-format/posters" },
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

export const blogItems = [
    { title: "news", href: "/blog/news" },
    { title: "about-us", href: "/blog/about-us" }
];

export function createLocalePath(lang: string, title: string): string {
    // Combine all menu items arrays into one list
    const allItems = [
        ...smallFormatItems,
        ...largeFormatItems,
        ...servicesItems,
        ...supportItems,
        ...blogItems,
    ];

    // Find the menu item with the given title
    const foundItem = allItems.find(item => item.title === title);

    if (foundItem) {
        // Prepend the language code to the found href. 
        // foundItem.href already starts with a slash.
        return `/${lang}${foundItem.href}`;
    }

    // Fallback: if not found, return a default localized path
    return `/${lang}/${title}`;
}



export function SiteNavigationMenu({ lang }: BasePageProps) {
    const t = getT(lang, "menu");
    return (
        <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark font-gilroy leading-none text-sm lg:text-base">
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
                    <NavigationMenuTrigger className="dark font-gilroy leading-none text-sm lg:text-base">
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
                    <NavigationMenuTrigger className="dark font-gilroy leading-none text-sm lg:text-base">
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
                    <NavigationMenuTrigger className="dark font-gilroy leading-none text-sm lg:text-base">
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

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark font-gilroy leading-none text-sm lg:text-base">
                        {t("blog")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[700px] gap-3 p-4 md:w-[770px] md:grid-cols-2 lg:w-[915px]">
                            {blogItems.map((item) => (
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

                <NavigationMenuItem className="dark font-gilroy leading-none ">
                    <Link href={"/" + lang + "/contacts"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle() + "text-sm lg:text-base"}>
                            <div className="flex items-center font-medium text-sm lg:text-base">
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
                        <div className="text-sm leading-none">
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



