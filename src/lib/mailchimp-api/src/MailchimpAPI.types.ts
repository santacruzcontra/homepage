import { type FetcherConfig } from "@brr-dev/fetcher";

export type MailchimpAPISettings = Omit<FetcherConfig, "baseURL"> & {
    // Mailchimp data center region
    region: string;

    // Access token for the Mailchimp API
    token: string;

    // API Version (currently only support V3)
    apiVersion?: string;
};
