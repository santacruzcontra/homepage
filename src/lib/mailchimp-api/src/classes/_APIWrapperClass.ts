import { type MailchimpAPI } from "~/lib/mailchimp-api/src/classes/MailchimpAPI.class";

export class _APIWrapperClass {
    public api: MailchimpAPI;

    constructor(api: MailchimpAPI) {
        this.api = api;
    }
}
