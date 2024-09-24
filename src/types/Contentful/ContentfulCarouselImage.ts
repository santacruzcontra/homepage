import { type Contentful } from "@brr-dev/contentful";

export const id = "carouselImage";
export type Entry = Contentful.Entry<
    typeof id,
    {
        image: Contentful.Link;
        imageDescription: string;
        active: boolean;
    }
>;
