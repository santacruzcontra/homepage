import { env } from "~/env";
import { _BaseMailchimpAPI } from "./_BaseMailchimpAPI";
import { type MailchimpErrorRes } from "./helpers";

export const WEBSITE = "Website";
export const DISCC = "DISCC";

export type UpdateTagSuccessRes = Record<string, never>;
export type TagSpec = { name: string; status: "active" | "inactive" };

export function update(
    subscriberHash: string,
    tagChanges: TagSpec | TagSpec[],
): Promise<UpdateTagSuccessRes | MailchimpErrorRes> {
    const tagArr = Array.isArray(tagChanges) ? tagChanges : [tagChanges];

    return _BaseMailchimpAPI._Post(
        `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members/${subscriberHash}/tags`,
        { tags: tagArr },
    );
}

function formatTagStrings(tags: string | string[], active: boolean) {
    const tagArr = typeof tags === "string" ? [tags] : tags;
    return tagArr.map<TagSpec>((tag) => ({
        name: tag,
        status: active ? "active" : "inactive",
    }));
}

export function add(subscriberHash: string, tags: string | string[]) {
    return update(subscriberHash, formatTagStrings(tags, true));
}

export function remove(subscriberHash: string, tags: string | string[]) {
    return update(subscriberHash, formatTagStrings(tags, false));
}
