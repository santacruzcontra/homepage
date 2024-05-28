"use server";

import { Suspense } from "react";
import { HomePageCarouselComponent } from "./HomePageCarouselComponent";
import { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import { ContentfulCarouselImage } from "~/types/Contentful";
import { Skeleton } from "~/components/ui/skeleton";

export async function HomePageCarousel() {
  return (
    <Suspense fallback={<Skeleton className="h-[540px] w-[960px] " />}>
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

  return <HomePageCarouselComponent imageArrayRes={imageArrayRes} />;
}
