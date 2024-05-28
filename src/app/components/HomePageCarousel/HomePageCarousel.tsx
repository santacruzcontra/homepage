"use server";

import { Suspense } from "react";
import { HomePageCarouselComponent } from "./HomePageCarouselComponent";
import { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import { ContentfulCarouselImage } from "~/types/Contentful";

export async function HomePageCarousel() {
  return (
    <Suspense fallback={null}>
      <HomePageCarouselInner />
    </Suspense>
  );
}

async function HomePageCarouselInner() {
  const imageArrayRes =
    await Contentful.entries.getList<ContentfulCarouselImage.Entry>({
      contentType: ContentfulCarouselImage.id,
    });

  return <HomePageCarouselComponent imageArrayRes={imageArrayRes} />;
}
