"use client";

import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import type { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import type { ContentfulCarouselImage } from "~/types/Contentful";

type HomePageCarouselComponentProps = {
  imageArrayRes: Contentful.ArrayResponse<ContentfulCarouselImage.Entry>;
};

type AssetMap = Record<string, Contentful.Asset>;

export function HomePageCarouselComponent({
  imageArrayRes,
}: HomePageCarouselComponentProps) {
  const assetsByID: AssetMap | undefined = useMemo(
    () =>
      imageArrayRes.includes?.Asset.reduce((res, asset) => {
        res[asset.sys.id] = asset as Contentful.Asset;
        return res;
      }, {} as AssetMap),
    [imageArrayRes],
  );

  const getImage = useCallback(
    (imageEntry: ContentfulCarouselImage.Entry): React.JSX.Element | null => {
      const imgID = imageEntry.fields.image.sys.id;

      // We can't render an image if we don't get one buddy
      if (assetsByID?.[imgID] === undefined) {
        return null;
      }

      return (
        <CarouselItem key={imageEntry.sys.id}>
          <Image
            src={assetsByID[imgID]!.fields.file.url}
            alt={imageEntry.fields.imageDescription}
          />
        </CarouselItem>
      );
    },
    [assetsByID],
  );

  // We can't render our carousel with no assets buddy
  if (assetsByID === undefined) {
    return null;
  }

  return (
    <Carousel>
      <CarouselContent>{imageArrayRes.items.map(getImage)}</CarouselContent>
    </Carousel>
  );
}
