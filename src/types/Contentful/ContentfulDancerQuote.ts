import { type Contentful } from "@brr-dev/contentful";

export const id = "quote";
export type Entry = Contentful.Entry<
    typeof id,
    {
        quote: string;
        name: string;
        active: boolean;
    }
>;
