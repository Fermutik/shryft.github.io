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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 px-4 sm:px-0">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    // Добавляем тень, скруглённые углы и эффект при наведении
                    className="max-w-xs mx-auto bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                    <CardHeader className="pb-2">
                        {/* Выделяем заголовок, увеличив шрифт и сделав его жирным */}
                        <CardTitle className="text-lg font-semibold text-gray-800">
                            {card.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        {/* Изображению можно задать дополнительные стили, например, скругление углов */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="mb-4 w-full h-auto object-cover rounded-md"
                        />
                        {/* Текст описания с более удобочитаемым межстрочным интервалом */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {card.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
