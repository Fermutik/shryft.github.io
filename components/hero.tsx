import React from "react"

import { Star } from "lucide-react"

export function HeroSection() {
    const items = [
        {
            title: "Надійність",
            description:
                "Ми пропонуємо стабільні та надійні послуги, перевірені роками успішної роботи. Наші клієнти отримують постійну підтримку й оперативне вирішення будь-яких питань.",
        },
        {
            title: "Якість",
            description:
                "Використовуємо найсучасніші технології та матеріали, щоб забезпечити відмінну якість у кожній деталі. З нами ви завжди впевнені у результаті.",
        },
        {
            title: "Індивідуальний підхід",
            description:
                "Ми завжди враховуємо потреби та побажання клієнтів, пропонуючи унікальні рішення. Кожен проєкт для нас – це можливість проявити творчість та професіоналізм.",
        },
        {
            title: "Швидкість",
            description:
                "Оптимізовані процеси дозволяють нам виконувати замовлення в найкоротші терміни. Ми цінуємо ваш час і робимо все можливе, щоб заощадити його.",
        },
        {
            title: "Гнучкі умови",
            description:
                "Пропонуємо різноманітні формати співпраці та оплати, аби ви могли обрати найбільш зручний варіант. Ми відкриті до діалогу та компромісу.",
        },
        {
            title: "Професійна команда",
            description:
                "Наші фахівці мають багаторічний досвід у сфері дизайну, маркетингу та менеджменту. Разом ми створюємо ефективні проєкти, які працюють на ваш успіх.",
        },
    ]

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                    Чому обирают нас?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-6 bg-white shadow-md hover:shadow-lg transition-shadow rounded-md"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-primary rounded-full">
                                    <Star className="size-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
