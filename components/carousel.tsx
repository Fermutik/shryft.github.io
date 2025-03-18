import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { BasePageProps } from "@/app/_page"
import { getT } from "@/lib/utils";

export function CarouselSize({ lang }: BasePageProps) {
    const t = getT(lang, "carousel");
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full mb-4"
        >
            <CarouselContent>
                {Array.from({ length: 9 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/6 lg:basis-1/6">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
