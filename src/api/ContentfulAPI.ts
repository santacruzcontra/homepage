import { Contentful } from "@brr-dev/contentful";
import { env } from "~/env";

export const ContentfulAPI = new Contentful.ContentfulAPI({
    apiType: env.CONTENTFUL_API_TYPE,
    token: env.CONTENTFUL_API_ACCESS_TOKEN,
    environment: env.CONTENTFUL_API_ENVIRONMENT,
    spaceID: env.CONTENTFUL_API_SPACE_ID,
});
