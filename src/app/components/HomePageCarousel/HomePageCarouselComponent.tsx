"use client";

import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  type CarouselApi,
} from "~/components/ui/carousel";
import type { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import type { ContentfulCarouselImage } from "~/types/Contentful";
import { CarouselImage } from "./CarouselImage";

type HomePageCarouselComponentProps = {
  imageArrayRes: Contentful.ArrayResponse<ContentfulCarouselImage.Entry>;
};

type AssetMap = Record<string, Contentful.Asset>;

export function HomePageCarouselComponent({
  imageArrayRes,
}: HomePageCarouselComponentProps) {
  const [api, setAPI] = useState<CarouselApi>();

  const autoplayPlugin = useRef(
    Autoplay({ delay: 6500, stopOnInteraction: false, playOnInit: false }),
  );

  const play = useCallback(() => {
    (autoplayPlugin.current as { play: () => void }).play();
  }, [autoplayPlugin]);

  const assetsByID = useMemo(
    () => mapAssetsToID(imageArrayRes.includes?.Asset),
    [imageArrayRes],
  );

  useEffect(() => {
    if (api) {
      const resetAutoplayTimer = () => {
        (autoplayPlugin.current as { reset: () => void }).reset();
      };

      api.on("select", resetAutoplayTimer);
      return () => {
        api.off("select", resetAutoplayTimer);
      };
    }
  }, [api]);

  // We can't render our carousel with no assets buddy
  if (assetsByID === undefined) {
    return null;
  }

  return (
    <Carousel
      plugins={[autoplayPlugin.current]}
      className="max-w-[800px]"
      setApi={setAPI}
    >
      <CarouselContent>
        <>
          {imageArrayRes.items.map((imageEntry, idx) => (
            <CarouselImage
              key={imageEntry.sys.id}
              isFirst={idx === 0}
              imageEntry={imageEntry}
              imageAsset={assetsByID[imageEntry.fields.image.sys.id]}
              play={play}
            />
          ))}
        </>
      </CarouselContent>
      {/*<CarouselDots />*/}
    </Carousel>
  );
}

function mapAssetsToID(assets?: Contentful.Resource[]): AssetMap | undefined {
  if (assets === undefined) return undefined;

  return assets.reduce((res, asset) => {
    res[asset.sys.id] = asset as Contentful.Asset;
    return res;
  }, {} as AssetMap);
}
