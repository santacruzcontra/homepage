"use client";

import { type ContentfulDancerQuote } from "~/types/Contentful";
import { useAutoplayCarousel } from "~/app/hooks/useAutoplayCarousel";
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";
import { QuoteCarouselItem } from "./QuoteCarouselItem";
import { type Contentful } from "@brr-dev/contentful";

type QuoteCarouselComponentProps = {
    quoteArrayRes: Contentful.ArrayResponse<ContentfulDancerQuote.Entry>;
};

export function QuoteCarouselComponent({
    quoteArrayRes,
}: QuoteCarouselComponentProps) {
    const [, setAPI, autoplayPlugin] = useAutoplayCarousel({
        playOnInit: true,
        delay: 15000,
    });

    return (
        <Carousel plugins={[autoplayPlugin.current]} setApi={setAPI}>
            <CarouselPrevious />
            <div className="min-[650px]:p-4 min-[800px]:px-8 min-[800px]:py-6">
                <CarouselContent>
                    <>
                        {quoteArrayRes.items?.map((itemEntry) => (
                            <QuoteCarouselItem
                                key={itemEntry.sys.id}
                                quoteEntry={itemEntry}
                            />
                        ))}
                    </>
                </CarouselContent>
            </div>
            <CarouselNext />
            <CarouselDots />
        </Carousel>
    );
}
