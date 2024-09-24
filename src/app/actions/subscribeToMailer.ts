"use server";

import { EmailFormSchema } from "~/lib/schemas";
import { MailchimpAPI, MailchimpTags } from "~/api/MailchimpAPI";

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

    // Subscribe the user to our mailing list
    const subRes = await MailchimpAPI.audience.subscribe(result.data.email);

    // Make sure we were successful
    if (MailchimpAPI.isErrorRes(subRes)) {
        if (subRes.title === "Member Exists") {
            return {
                ok: false,
                status: 409,
                errors: ["You are already subscribed to our mailing list."],
            };
        }

        if (subRes.title === "Forgotten Email Not Subscribed") {
            return {
                ok: false,
                status: 403,
                errors: ["You must resubscribe manually."],
            };
        }

        // TODO error handling, maybe something with title/detail?
        return {
            ok: false,
            status: 404,
            errors: [
                "We were unable to subscribe you to our mailing list.",
                subRes.detail,
            ],
        };
    }

    try {
        // If the call was successful, add the tags for our user
        const addTagRes = await MailchimpAPI.tags.add(subRes.id, [
            MailchimpTags.WEBSITE,
            MailchimpTags.DISCC,
        ]);

        // Make sure we didn't get any mailchimp errors
        if (MailchimpAPI.isErrorRes(addTagRes)) {
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
        } else if (MailchimpAPI.isErrorRes(err)) {
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
