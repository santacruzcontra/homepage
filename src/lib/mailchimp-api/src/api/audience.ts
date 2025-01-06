import { env } from "~/env";
import { _APIWrapperClass } from "~/lib/mailchimp-api/src/classes/_APIWrapperClass";
import type {
    SubscribeSuccessRes,
    UserStatus,
} from "~/lib/mailchimp-api/src/types/audience.types";
import { type MailchimpErrorRes } from "~/lib/mailchimp-api/src/types/api.types";

export class Audience extends _APIWrapperClass {
    /**
     * Subscribe to the configured MailChimp audience.
     *
     * TODO flesh out the types better, currently only including the
     *      important bits - there is so much there omg...
     */
    public subscribe(
        email: string,
        // subscriberHash = hashEmail(email),
    ): Promise<SubscribeSuccessRes | MailchimpErrorRes> {
        return this.api.post(
            `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members`,
            {
                email_address: email,
                status: "subscribed" satisfies UserStatus,
            },
        );
    }
}
