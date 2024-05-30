import { env } from "~/env";
import { _BaseMailchimpAPI } from "./_BaseMailchimpAPI";
import { hashEmail, type MailchimpErrorRes } from "./helpers";

type SubscribeSuccessRes = {
  /** Should be their subscriber hash */
  id: string;
  email_address: string;
  unique_email_id: string;
  contact_id: string;
  full_name: string;
  status: string;
  /** ISO datetime */
  timestamp_signup: string;
  /** ISO datetime */
  last_changed: string;
  tags_count: number;
  tags: { id: number; name: string }[];
};

/**
 * Subscribe to the configured MailChimp audience.
 *
 * TODO flesh out the types better, currently only including the
 *      important bits - there is so much there omg...
 */
export function subscribe(
  email: string,
  subscriberHash = hashEmail(email),
): Promise<SubscribeSuccessRes | MailchimpErrorRes> {
  return _BaseMailchimpAPI._Put(
    `/lists/${env.MAILCHIMP_API_AUDIENCE_ID}/members/${subscriberHash}`,
    { email_address: email, status_if_new: "pending" },
  );
}
