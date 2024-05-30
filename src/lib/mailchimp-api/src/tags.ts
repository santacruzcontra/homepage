import { env } from "~/env";
import { _BaseMailchimpAPI } from "./_BaseMailchimpAPI";

export const WEBSITE = "Website";
export function add(subscriberHash: string, tags: string | string[]) {
  const tagArr = typeof tags === "string" ? [tags] : tags;
  const mappedTags = tagArr.map((tag) => ({ name: tag, status: "active" }));

  return _BaseMailchimpAPI._Post(
    `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members/${subscriberHash}/tags`,
    {
      tags: mappedTags,
    },
  );
}
