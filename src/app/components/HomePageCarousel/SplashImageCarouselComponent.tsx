"use client";

import { useCallback, useMemo } from "react";
import { Carousel, CarouselContent } from "~/components/ui/carousel";
import type { Contentful } from "~/lib/contentful-api/ContentfulAPI";
import type { ContentfulCarouselImage } from "~/types/Contentful";
import { CarouselImage } from "./CarouselImage";
import { useAutoplayCarousel } from "~/app/hooks/useAutoplayCarousel";

type HomePageCarouselComponentProps = {
    imageArrayRes: Contentful.ArrayResponse<ContentfulCarouselImage.Entry>;
};

type AssetMap = Record<string, Contentful.Asset>;

export function SplashImageCarouselComponent({
    imageArrayRes,
}: HomePageCarouselComponentProps) {
    const [, setAPI, autoplayPlugin] = useAutoplayCarousel();

    const play = useCallback(() => {
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
            <CarouselContent>
                <>
                    {imageArrayRes.items.map((imageEntry, idx) => (
                        <CarouselImage
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
