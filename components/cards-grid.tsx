import * as React from "react"
import { MenuIcon } from "@/components/lucid_icons"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils"

export function CardsGrid({ t, lang }: BasePageProps) {

    const cardsData = [
        {
            title: "presentations",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для каталогов. Здесь будет вторая часть описания.",
        },
        {
            title: "brochures",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для лекал. Здесь будет вторая часть описания.",
        },
        {
            title: "booklets",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для бланков. Здесь будет вторая часть описания.",
        },
        {
            title: "hangers",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для бейджей. Здесь будет вторая часть описания.",
        },
        {
            title: "books",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для сертификатов. Здесь будет вторая часть описания.",
        },
        {
            title: "catalogs",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для визиток. Здесь будет вторая часть описания.",
        },
        {
            title: "patterns",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для листовок. Здесь будет вторая часть описания.",
        },
        {
            title: "badges",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для бирок. Здесь будет вторая часть описания.",
        },
    ]
    t = getT(lang, "menu");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 px-4 sm:px-0">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    className="max-w-xs mx-auto bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-semibold text-gray-800 flex flex-row justify-start items-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-primary rounded-full mr-3">
                                <MenuIcon
                                    menuKey={card.title as any}
                                    className="w-4 h-4 flex-shrink-0"
                                />
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
                            {card.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
