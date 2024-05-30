import { env } from "~/env";
import { _BaseMailchimpAPI } from "./_BaseMailchimpAPI";
import { type MailchimpErrorRes } from "./helpers";

export const WEBSITE = "Website";
export const DISCC = "DISCC";

export type AddTagSuccessRes = Record<string, never>;

export function add(
  subscriberHash: string,
  tags: string | string[],
): Promise<AddTagSuccessRes | MailchimpErrorRes> {
  const tagArr = typeof tags === "string" ? [tags] : tags;
  const mappedTags = tagArr.map((tag) => ({ name: tag, status: "active" }));

  return _BaseMailchimpAPI._Post(
    `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members/${subscriberHash}/tags`,
    { tags: mappedTags },
  );
}
