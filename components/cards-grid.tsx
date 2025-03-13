import * as React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"

export function CardsGrid() {
    const cardsData = [
        {
            title: "Каталоги",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для каталогов. Здесь будет вторая часть описания.",
        },
        {
            title: "Лекала",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для лекал. Здесь будет вторая часть описания.",
        },
        {
            title: "Бланки",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для бланков. Здесь будет вторая часть описания.",
        },
        {
            title: "Бейджі",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для бейджей. Здесь будет вторая часть описания.",
        },
        {
            title: "Сертифікати",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для сертификатов. Здесь будет вторая часть описания.",
        },
        {
            title: "Візитівки",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для визиток. Здесь будет вторая часть описания.",
        },
        {
            title: "Листівки",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для листовок. Здесь будет вторая часть описания.",
        },
        {
            title: "Бірки",
            image: "https://placehold.co/250x150/cccccc/ffffff?Image+Placeholder",
            description: "Это описание для бирок. Здесь будет вторая часть описания.",
        },
    ]

    return (
        < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" >
            {
                cardsData.map((card, index) => (

                    < Card key={index} className="max-w-xs mx-auto" >
                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="mb-2"
                            />
                            <p className="text-sm text-muted-foreground">
                                {card.description}
                            </p>
                        </CardContent>
                    </Card >
                ))
            }
        </div >
    )
}
