import React from "react"
import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils";
import { Star } from "lucide-react"

export function HeroSection({ lang }: BasePageProps) {
    const items = Array.from({ length: 6 }, (_, i) => ({
        title: `i${i + 1}.title`,
        description: `i${i + 1}.description`,
    }));
    const t = getT(lang, "hero");

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                    {t("title")}
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
                                    {t(item.title)}
                                </h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed">{t(item.description)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
