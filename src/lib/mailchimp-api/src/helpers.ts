import crypto from "crypto";

export type MailchimpErrorRes = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};

export function isErrorRes(res: unknown): res is MailchimpErrorRes {
  return (
    typeof res === "object" &&
    typeof (res as MailchimpErrorRes).status === "number"
  );
}

export function hashEmail(email: string): string {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}
