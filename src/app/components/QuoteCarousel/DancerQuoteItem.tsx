import type { ContentfulDancerQuote } from "~/types/Contentful";
import { CarouselItem } from "~/components/ui/carousel";

export interface DancerQuoteProps {
  quoteEntry: ContentfulDancerQuote.Entry;
}

export function DancerQuoteItem({ quoteEntry }: DancerQuoteProps) {
  return (
    <CarouselItem>
      <div className="flex h-full flex-col gap-2">
        <div className="flex flex-grow flex-col justify-center">
          <span className="text-center text-sm min-[400px]:text-base">
            <span className="font-title">&#8220;</span>
            {quoteEntry.fields.quote}
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
