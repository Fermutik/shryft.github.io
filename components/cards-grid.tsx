import * as React from "react"
import { MenuIcon } from "@/components/lucid_icons"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from "@/components/ui/card"
import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils"
import { HomeItem } from "@/app/_home"
import Image from "next/image"
import Link from "next/link"
import { createLocalePath } from "./menu"

interface CardsGridProps extends BasePageProps {
    item: HomeItem;
}

export function CardsGrid({ lang, item }: CardsGridProps) {
    const t = getT(lang, "menu");
    const t_card = getT(lang, "cards-grid");

    return (
        <>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <Card className="col-span-1 sm:col-span-2 py-0 lg:col-span-2 shadow-none border-none bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="p-8">
                        <h1 className="font-gilroy text-2xl md:text-3xl">{t(item.title)}</h1>
                        <CardDescription className="mt-4 leading-relaxed prose">
                            <div dangerouslySetInnerHTML={{ __html: item.article }} />
                        </CardDescription>
                    </div>
                </Card>
                <div className="col-span-1 sm:col-span-2 lg:col-span-2 hidden lg:flex justify-center items-center shadow-none border-nonerounded-lg">
                    <Image
                        src={"/home/" + item.image}
                        width="662"
                        height="373"
                        alt={t(item.title)}
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 sm:px-0">
                {item.cardsData.map((card, index) => (
                    <Link key={index} href={createLocalePath(lang, card.title)} passHref>
                        <Card className="max-w-xs mx-auto bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl font-semibold text-gray-800 flex flex-row justify-start items-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-primary rounded-full mr-3">
                                        <MenuIcon menuKey={card.title as any} className="w-4 h-4 flex-shrink-0" />
                                    </div>
                                    {t(card.title)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="mb-4 w-full h-auto object-cover rounded-md"
                                />
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {t_card(card.description)}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    )
}
