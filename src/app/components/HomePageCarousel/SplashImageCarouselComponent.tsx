"use client";

import { useCallback, useMemo } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";
import type { ContentfulCarouselImage } from "~/types/Contentful";
import { SplashImageCarouselItem } from "./SplashImageCarouselItem";
import { useAutoplayCarousel } from "~/app/hooks/useAutoplayCarousel";
import { type Contentful } from "@brr-dev/contentful";

type HomePageCarouselComponentProps = {
    imageArrayRes: Contentful.ArrayResponse<ContentfulCarouselImage.Entry>;
};

type AssetMap = Record<string, Contentful.Asset>;

export function SplashImageCarouselComponent({
    imageArrayRes,
}: HomePageCarouselComponentProps) {
    const [, setAPI, autoplayPlugin] = useAutoplayCarousel();

    const play = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
        autoplayPlugin.current?.play();
    }, [autoplayPlugin]);

    const assetsByID = useMemo(
        () => mapAssetsToID(imageArrayRes.includes?.Asset),
        [imageArrayRes],
    );

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
            <CarouselPrevious />
            <CarouselContent>
                <>
                    {imageArrayRes.items.map((imageEntry, idx) => (
                        <SplashImageCarouselItem
                            key={imageEntry.sys.id}
                            isFirst={idx === 0}
                            imageEntry={imageEntry}
                            imageAsset={
                                assetsByID[imageEntry.fields.image.sys.id]
                            }
                            play={play}
                        />
                    ))}
                </>
            </CarouselContent>
            <CarouselNext />
            <CarouselDots />
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
