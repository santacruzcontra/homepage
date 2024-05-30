"use server";

import { Mailchimp } from "~/lib/mailchimp-api";
import { EmailFormSchema } from "~/lib/schemas";

/**
 * Subscribe the user with the given email address to the configured
 * Mailchimp "audience" (mailing list), then add a tag to their account
 * indicating that they joined from the website.
 */
export async function subscribeToMailer(email: string) {
  // Validate using our schema
  const result = EmailFormSchema.safeParse({ email });

  // TODO better schema validation error handling
  if (!result.success) {
    return {
      ok: false,
      status: 400,
      errors: result.error.flatten().formErrors,
    };
  }

  // Generate a subscriber hash for the user
  const subscriberHash = Mailchimp.hashEmail(result.data.email);

  // Subscribe the user to our mailing list
  const subRes = await Mailchimp.audience.subscribe(
    result.data.email,
    subscriberHash,
  );

  // Make sure we were successful
  if (Mailchimp.isErrorRes(subRes)) {
    // TODO error handling, maybe something with title/detail?
    return {
      ok: false,
      status: 404,
      errors: ["Unable to subscribe you to our email list.", subRes.detail],
    };
  }

  try {
    // If the call was successful, add the tags for our user
    const addTagRes = await Mailchimp.tags.add(subRes.id, [
      Mailchimp.tags.WEBSITE,
      Mailchimp.tags.DISCC,
    ]);

    // Make sure we didn't get any mailchimp errors
    if (Mailchimp.isErrorRes(addTagRes)) {
      // TODO - do we even throw an error here? Seems silly, maybe we let it go through
      throw addTagRes;
    }
  } catch (err) {
    if (
      err instanceof Error &&
      err.message.includes("Unexpected end of JSON input")
    ) {
      // Handle this annoying fake error that happens because of my shoddy old
      // API lib - the body is empty, response.json() errors out. Do nothing!
    } else if (Mailchimp.isErrorRes(err)) {
      // Handle mailchimp errors
      return { ok: false, status: 404, errors: [err.detail] };
    } else {
      // Unhandled exception
      console.warn("Unhandled Exception in subscribeToMailer()");
      console.error(err);
    }
  }

  // At the end, if everything works we're good!
  return { ok: true, status: 201 };
}
