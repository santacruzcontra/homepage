export type UserStatus =
    | "pending"
    | "cleaned"
    | "subscribed"
    | "unsubscribed"
    | "transactional";

export type SubscribeSuccessRes = {
    /** Should be their subscriber hash */
    id: string;
    email_address: string;
    unique_email_id: string;
    contact_id: string;
    full_name: string;
    status: UserStatus;
    /** ISO datetime */
    timestamp_signup: string;
    /** ISO datetime */
    last_changed: string;
    tags_count: number;
    tags: { id: number; name: string }[];
};
