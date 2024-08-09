import type { Contentful } from "~/lib/contentful-api/ContentfulAPI";

export const id = "carouselImage";
export type Entry = Contentful.Entry<
    typeof id,
    {
        image: Contentful.Link;
        imageDescription: string;
        active: boolean;
    }
>;
