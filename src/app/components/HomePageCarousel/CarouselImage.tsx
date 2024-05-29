import Image from "next/image";
import { useCallback, useState } from "react";
import { CarouselItem } from "~/components/ui/carousel";
import { Skeleton } from "~/components/ui/skeleton";
import { type Contentful } from "~/lib/contentful-api/ContentfulAPI";
import { type ContentfulCarouselImage } from "~/types/Contentful";

const CAROUSEL_IMG_WIDTH = 960;
const CAROUSEL_IMG_HEIGHT = 540;

export function CarouselImage({
  imageEntry,
  imageAsset,
  isFirst,
  play,
}: {
  imageEntry: ContentfulCarouselImage.Entry;
  imageAsset?: Contentful.Asset;
  isFirst: boolean;
  play: () => void;
}) {
  const [loading, setLoading] = useState(true);

  const loadingComplete = useCallback(() => {
    setLoading(false);
    if (isFirst) play();
  }, [setLoading, play, isFirst]);

  // We can't render an image if we don't get one buddy
  if (!imageAsset) return null;

  const whClasses = `max-w-[${CAROUSEL_IMG_WIDTH}px] max-h-[${CAROUSEL_IMG_HEIGHT}px]`;

  return (
    <CarouselItem className={`relative ${whClasses}`}>
      <Image
        src={"https:" + imageAsset.fields.file.url}
        alt={imageEntry.fields.imageDescription}
        width={CAROUSEL_IMG_WIDTH}
        height={CAROUSEL_IMG_HEIGHT}
        priority={isFirst}
        onLoad={loadingComplete}
        onError={loadingComplete}
        className={`rounded-lg ${loading ? "invisible" : "visible"}`}
      />
      <span
        className={`absolute top-0 ${whClasses} ${loading ? "block" : "hidden"}`}
      >
        <Skeleton className={`rounded-lg ${whClasses}`} />
      </span>
    </CarouselItem>
  );
}
