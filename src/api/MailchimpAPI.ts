import { env } from "~/env";
import { Mailchimp } from "~/lib/mailchimp-api";

export const MailchimpAPI = new Mailchimp.API({
    token: env.MAILCHIMP_API_ACCESS_TOKEN,
    region: env.MAILCHIMP_API_REGION_ID,
});

export const MailchimpTags = {
    WEBSITE: "Website",
    DISCC: "DISCC",
};
