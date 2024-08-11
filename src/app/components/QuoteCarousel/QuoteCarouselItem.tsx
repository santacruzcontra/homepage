import type { ContentfulDancerQuote } from "~/types/Contentful";
import { CarouselItem } from "~/components/ui/carousel";

export interface DancerQuoteProps {
    quoteEntry: ContentfulDancerQuote.Entry;
}

export function QuoteCarouselItem({ quoteEntry }: DancerQuoteProps) {
    // Replace the final whitespace character in the text with a non-breaking space
    const quoteText = quoteEntry.fields.quote
        .split(/\s+/g)
        .reduce((res, strPart, idx, arr) => {
            if (!res) return strPart;
            else if (idx === arr.length - 1) return `${res}\u00A0${strPart}`;
            else return `${res} ${strPart}`;
        }, "");

    return (
        <CarouselItem>
            <div className="flex h-full flex-col gap-2">
                <div className="flex flex-grow flex-col justify-center">
                    <span className="text-center text-sm min-[400px]:text-base min-[650px]:text-lg">
                        <span className="font-title">&#8220;</span>
                        {quoteText}
                        <span className="font-title">&#8221;</span>
                    </span>
                </div>
                <div className="px-8 text-right font-title text-2xl min-[650px]:text-3xl">
                    &#8211;&nbsp;{quoteEntry.fields.name}
                </div>
            </div>
        </CarouselItem>
    );
}
