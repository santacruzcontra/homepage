import { env } from "~/env";
import { _BaseMailchimpAPI } from "./_BaseMailchimpAPI";
import crypto from "crypto";

/**
 * Subscribe to the configured MailChimp audience.
 */
export function subscribe(email: string) {
  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");
  return _BaseMailchimpAPI._Put(
    `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members/${subscriberHash}`,
    { email_address: email, status_if_new: "pending" },
  );
}
