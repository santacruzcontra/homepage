import { Fetcher } from "@brr-dev/fetcher";
import { type MailchimpAPISettings } from "~/lib/mailchimp-api/src/MailchimpAPI.types";
import { type MailchimpErrorRes } from "~/lib/mailchimp-api/src/types/api.types";
import crypto from "crypto";
import { Audience } from "~/lib/mailchimp-api/src/api/audience";
import { Tags } from "~/lib/mailchimp-api/src/api/tags";

export class MailchimpAPI extends Fetcher<MailchimpAPISettings> {
    audience: Audience;
    tags: Tags;

    constructor({
        region,
        token,
        apiVersion = "3.0",
        ...settings
    }: MailchimpAPISettings) {
        super({
            baseURL: `https://${region}.api.mailchimp.com/${apiVersion}`,
            ...settings,
        });

        if (token) {
            this._headers.Authorization = `Bearer ${token}`;
        }

        this.audience = new Audience(this);
        this.tags = new Tags(this);
    }

    public isErrorRes(res: unknown): res is MailchimpErrorRes {
        return (
            typeof res === "object" &&
            typeof (res as MailchimpErrorRes).status === "number"
        );
    }

    public hashEmail(email: string): string {
        return crypto
            .createHash("md5")
            .update(email.toLowerCase())
            .digest("hex");
    }
}
