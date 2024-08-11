"use client";

import { type Contentful } from "~/lib/contentful-api/ContentfulAPI";
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
            <CarouselNext />
            <CarouselDots />
        </Carousel>
    );
}
