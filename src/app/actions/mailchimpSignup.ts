"use server";

import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export async function mailchimpSignup(formData: FormData) {
  // Validate using our schema
  const validatedFields = signupSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten(),
    };
  }

  // TODO add a check to make sure email is passed in and valid
  const subscribeRes = await subscribeEmailViaMCAPI(validatedFields.data.email);
}

/**
 * Wrap the subscribe request to the Mailchimp API in its own typesafe function.
 */
async function subscribeEmailViaMCAPI(email: string) {
  // TODO build the API call that subscribes to our mailchimp audience
}
