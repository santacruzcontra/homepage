import { env } from "~/env";
import { _APIWrapperClass } from "~/lib/mailchimp-api/src/classes/_APIWrapperClass";
import { type MailchimpErrorRes } from "~/lib/mailchimp-api/src/types/api.types";
import {
    type TagSpec,
    type UpdateTagSuccessRes,
} from "~/lib/mailchimp-api/src/types/tags.types";

export class Tags extends _APIWrapperClass {
    public update(
        subscriberHash: string,
        tagChanges: TagSpec | TagSpec[],
    ): Promise<UpdateTagSuccessRes | MailchimpErrorRes> {
        const tagArr = Array.isArray(tagChanges) ? tagChanges : [tagChanges];

        return this.api.post(
            `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members/${subscriberHash}/tags`,
            { tags: tagArr },
        );
    }

    public add(subscriberHash: string, tags: string | string[]) {
        return this.update(subscriberHash, this.formatTagStrings(tags, true));
    }

    public remove(subscriberHash: string, tags: string | string[]) {
        return this.update(subscriberHash, this.formatTagStrings(tags, false));
    }

    private formatTagStrings(tags: string | string[], active: boolean) {
        const tagArr = typeof tags === "string" ? [tags] : tags;
        return tagArr.map<TagSpec>((tag) => ({
            name: tag,
            status: active ? "active" : "inactive",
        }));
    }
}
