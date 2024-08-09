import { Suspense } from "react";
import { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import { ContentfulDancerQuote } from "~/types/Contentful";
import { QuoteCarouselComponent } from "~/app/components/QuoteCarousel/QuoteCarouselComponent";

export async function QuoteCarousel() {
    return (
        <Suspense>
            <QuoteCarouselInner />
        </Suspense>
    );
}

async function QuoteCarouselInner() {
    const quoteArrayRes =
        await Contentful.entries.getList<ContentfulDancerQuote.Entry>({
            contentType: ContentfulDancerQuote.id,
            limit: 10,
            orderBy: { field: "sys.updatedAt", desc: true },
            "fields.active": true,
        });

    return <QuoteCarouselComponent quoteArrayRes={quoteArrayRes} />;
}
