"use server";

import { Suspense } from "react";
import { SplashImageCarouselComponent } from "./SplashImageCarouselComponent";
import { ContentfulCarouselImage } from "~/types/Contentful";
import { Skeleton } from "~/components/ui/skeleton";
import { ContentfulAPI } from "~/api/ContentfulAPI";

export async function SplashImageCarousel() {
    return (
        <Suspense fallback={<Skeleton className="h-[450px] w-[800px]" />}>
            <HomePageCarouselInner />
        </Suspense>
    );
}

async function HomePageCarouselInner() {
    const imageArrayRes =
        await ContentfulAPI.entries.getList<ContentfulCarouselImage.Entry>({
            contentType: ContentfulCarouselImage.id,
            limit: 10,
            // orderBy: { field: "sys.updatedAt", desc: true },
        });

    return <SplashImageCarouselComponent imageArrayRes={imageArrayRes} />;
}
