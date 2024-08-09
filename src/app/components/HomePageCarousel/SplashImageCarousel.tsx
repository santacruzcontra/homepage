"use server";

import { Suspense } from "react";
import { SplashImageCarouselComponent } from "./SplashImageCarouselComponent";
import { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import { ContentfulCarouselImage } from "~/types/Contentful";
import { Skeleton } from "~/components/ui/skeleton";

export async function SplashImageCarousel() {
  return (
    <Suspense fallback={<Skeleton className="h-[450px] w-[800px]" />}>
      <HomePageCarouselInner />
    </Suspense>
  );
}

async function HomePageCarouselInner() {
  const imageArrayRes =
    await Contentful.entries.getList<ContentfulCarouselImage.Entry>({
      contentType: ContentfulCarouselImage.id,
      limit: 10,
      orderBy: { field: "sys.updatedAt", desc: true },
    });

  return <SplashImageCarouselComponent imageArrayRes={imageArrayRes} />;
}
