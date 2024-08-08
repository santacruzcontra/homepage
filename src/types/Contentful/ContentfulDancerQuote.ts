import type { Contentful } from "~/lib/contentful-api/ContentfulAPI";

export const id = "quote";
export type Entry = Contentful.Entry<
	typeof id,
	{
		quote: string;
		name: string;
		active: boolean;
	}
>
