import * as React from "react"
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils"

const data = {
  navMain: [
    {
      title: "small-format",
      url: "",
      items: [
        { title: "presentations", url: "/small-format/presentations" },
        { title: "brochures", url: "/small-format/brochures" },
        { title: "architectural-projects", url: "/small-format/architectural-projects" },
        { title: "stickers-stickerpacks", url: "/small-format/stickers-stickerpacks" },
        { title: "diplomas-acknowledgments", url: "/small-format/diplomas-acknowledgments" },
        { title: "catalogs", url: "/small-format/catalogs" },
        { title: "patterns", url: "/small-format/patterns" },
        { title: "forms", url: "/small-format/forms" },
        { title: "badges", url: "/small-format/badges" },
        { title: "certificates", url: "/small-format/certificates" },
        { title: "business-cards", url: "/small-format/business-cards" },
        { title: "postcards", url: "/small-format/postcards" },
        { title: "tags", url: "/small-format/tags" },
        { title: "calendars", url: "/small-format/calendars" },
        { title: "menu", url: "/small-format/menu" },
        { title: "price-tags", url: "/small-format/price-tags" },
        { title: "flyers", url: "/small-format/flyers" },
        { title: "booklets", url: "/small-format/booklets" },
        { title: "notepads", url: "/small-format/notepads" },
        { title: "hangers", url: "/small-format/hangers" },
        { title: "books", url: "/small-format/books" },
        { title: "envelopes", url: "/small-format/envelopes" },
        { title: "labels", url: "/small-format/labels" },
        { title: "shaped-paper-products", url: "/small-format/shaped-paper-products" },
      ],
    },
    {
      title: "large-format",
      url: "",
      items: [
        { title: "drawings", url: "/large-format/drawings" },
        { title: "tablets", url: "/large-format/tablets" },
        { title: "tracing-paper-print", url: "/large-format/tracing-paper-print" },
        { title: "posters", url: "/large-format/posters" },
        { title: "self-adhesive-print", url: "/large-format/self-adhesive-print" },
        { title: "photo-wallpaper", url: "/large-format/photo-wallpaper" },
        { title: "oracal-print", url: "/large-format/oracal-print" },
        { title: "banner-print", url: "/large-format/banner-print" },
        { title: "canvas-print", url: "/large-format/canvas-print" },
        { title: "spider-banner", url: "/large-format/spider-banner" },
        { title: "roll-up-banner", url: "/large-format/roll-up-banner" },
      ],
    },
    {
      title: "services",
      url: "",
      items: [
        { title: "color-print", url: "/services/color-print" },
        { title: "black-and-white-print", url: "/services/black-and-white-print" },
        { title: "large-format-print", url: "/services/large-format-print" },
        { title: "sheet-print", url: "/services/sheet-print" },
        { title: "lamination", url: "/services/lamination" },
        { title: "hard-cover", url: "/services/hard-cover" },
        { title: "soft-cover", url: "/services/soft-cover" },
        { title: "digital-banner-print", url: "/services/digital-banner-print" },
        { title: "plotter-cutting", url: "/services/plotter-cutting" },
        { title: "offset-printing", url: "/services/offset-printing" },
        { title: "post-print-processing", url: "/services/post-print-processing" },
        { title: "personalization", url: "/services/personalization" },
        { title: "film-applying", url: "/services/film-applying" },
        { title: "selection", url: "/services/selection" },
      ],
    },
    {
      title: "support",
      url: "",
      items: [
        { title: "how-to-order", url: "/support/how-to-order", isActive: true },
        { title: "get-a-quote", url: "/support/get-a-quote" },
        { title: "design-requirements", url: "/support/design-requirements" },
        { title: "how-to-pay", url: "/support/how-to-pay" },
        { title: "delivery", url: "/support/delivery" },
        { title: "materials-catalog", url: "/support/materials-catalog" },
      ],
    },
    {
      title: "blog",
      url: "",
      items: [
        { title: "news", url: "/blog/news" },
        { title: "about-us", url: "/blog/about-us" },
      ]
    },
    {
      title: "contacts",
      url:
        "/contacts",
    }
  ],
};


export function AppSidebar({
  lang,
  ...props
}: BasePageProps & React.ComponentProps<typeof Sidebar>) {
  const t_menu = getT(lang, "menu");

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">SHRYFT.COM</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => {
              if (item.items && item.items.length > 0) {
                return (
                  <Collapsible
                    key={item.title}
                    defaultOpen={index === 1}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        {item.url === "" ? (

                          <SidebarMenuButton className="font-gilroy">
                            {t_menu(item.title)}{" "}
                            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                          </SidebarMenuButton>
                        ) : (
                          <a href={"/" + lang + item.url}>
                            <SidebarMenuButton className="font-font-gilroy">
                              {t_menu(item.title)}{" "}
                              <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                              <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                            </SidebarMenuButton>
                          </a>
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={subItem.isActive}
                                className="font-gilroy"
                              >
                                <a href={"/" + lang + subItem.url}>
                                  {t_menu(subItem.title)}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              } else {
                return (
                  <SidebarMenuItem key={item.title}>
                    {item.url !== "" ? (
                      <SidebarMenuButton asChild className="font-gilroy">
                        <a href={"/" + lang + item.url}>
                          {t_menu(item.title)}</a>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton className="font-gilroy">
                        {t_menu(item.title)}
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
