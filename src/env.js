import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GOOGLE_CONTACT_FORM_URL: z.string().url(),
    SC_CONTRA_FACEBOOK_LINK: z.string().url(),
    MAILCHIMP_API_BASE_URL: z.string().url(),
    MAILCHIMP_API_ACCESS_TOKEN: z.string(),
    MAILCHIMP_API_AUDIENCE_ID: z.string(),
    CONTENTFUL_API_BASE_URL: z.string().url(),
    CONTENTFUL_API_SPACE_ID: z.string(),
    CONTENTFUL_API_ENVIRONMENT: z.string(),
    CONTENTFUL_API_ACCESS_TOKEN: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
    NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL: z.string().url(),
    NEXT_PUBLIC_SC_CONTRA_FACEBOOK_LINK: z.string().url(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Server
    NODE_ENV: process.env.NODE_ENV,
    MAILCHIMP_API_BASE_URL: process.env.MAILCHIMP_API_BASE_URL,
    MAILCHIMP_API_ACCESS_TOKEN: process.env.MAILCHIMP_API_ACCESS_TOKEN,
    MAILCHIMP_API_AUDIENCE_ID: process.env.MAILCHIMP_API_AUDIENCE_ID,
    GOOGLE_CONTACT_FORM_URL: process.env.GOOGLE_CONTACT_FORM_URL,
    SC_CONTRA_FACEBOOK_LINK: process.env.SC_CONTRA_FACEBOOK_LINK,
    CONTENTFUL_API_BASE_URL: process.env.CONTENTFUL_API_BASE_URL,
    CONTENTFUL_API_SPACE_ID: process.env.CONTENTFUL_API_SPACE_ID,
    CONTENTFUL_API_ENVIRONMENT: process.env.CONTENTFUL_API_ENVIRONMENT,
    CONTENTFUL_API_ACCESS_TOKEN: process.env.CONTENTFUL_API_ACCESS_TOKEN,

    // Client
    NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL:
      process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL,
    NEXT_PUBLIC_SC_CONTRA_FACEBOOK_LINK:
      process.env.NEXT_PUBLIC_SC_CONTRA_FACEBOOK_LINK,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
