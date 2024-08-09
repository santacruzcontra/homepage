"use client";

import { type Contentful } from "~/lib/contentful-api/ContentfulAPI";
import { type ContentfulDancerQuote } from "~/types/Contentful";
import { useAutoplayCarousel } from "~/app/hooks/useAutoplayCarousel";
import {
    Carousel,
    CarouselContent,
    CarouselDots,
} from "~/components/ui/carousel";
import { DancerQuoteItem } from "./DancerQuoteItem";

type QuoteCarouselComponentProps = {
    quoteArrayRes: Contentful.ArrayResponse<ContentfulDancerQuote.Entry>;
};

export function QuoteCarouselComponent({
    quoteArrayRes,
}: QuoteCarouselComponentProps) {
    const [, setAPI, autoplayPlugin] = useAutoplayCarousel({
        playOnInit: true,
    });

    return (
        <Carousel plugins={[autoplayPlugin.current]} setApi={setAPI}>
            <CarouselContent>
                <>
                    {quoteArrayRes.items?.map((itemEntry) => (
                        <DancerQuoteItem
                            key={itemEntry.sys.id}
                            quoteEntry={itemEntry}
                        />
                    ))}
                </>
            </CarouselContent>
            <CarouselDots />
        </Carousel>
    );
}
