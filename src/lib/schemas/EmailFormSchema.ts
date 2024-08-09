import { z } from "zod";

export const EmailFormSchema = z.object({
    email: z.string().email("Must provide a valid email address."),
});
