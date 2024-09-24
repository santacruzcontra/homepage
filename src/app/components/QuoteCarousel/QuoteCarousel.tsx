import { Suspense } from "react";
import { ContentfulDancerQuote } from "~/types/Contentful";
import { QuoteCarouselComponent } from "~/app/components/QuoteCarousel/QuoteCarouselComponent";
import { ContentfulAPI } from "~/api/ContentfulAPI";

export async function QuoteCarousel() {
    return (
        <Suspense>
            <QuoteCarouselInner />
        </Suspense>
    );
}

async function QuoteCarouselInner() {
    const quoteArrayRes =
        await ContentfulAPI.entries.getList<ContentfulDancerQuote.Entry>({
            contentType: ContentfulDancerQuote.id,
            limit: 10,
            // TODO get info
            // orderBy: { field: "sys.updatedAt", desc: true },
            // "fields.active": true,
        });

    return <QuoteCarouselComponent quoteArrayRes={quoteArrayRes} />;
}
