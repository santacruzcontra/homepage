"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { EmailFormSchema } from "~/lib/schemas";
import { subscribeToMailer } from "../actions/subscribeToMailer";
import { useAlertDialog } from "../hooks/useAlertDialog";
import { LinkToExternal } from "../components/LinkToExternal";
import { env } from "~/env";

type FormInputs = z.infer<typeof EmailFormSchema>;

export function SubscribeEmailForm() {
  const form = useForm<FormInputs>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const [dialogNode, openWithContent] = useAlertDialog();

  const onSubmit: SubmitHandler<FormInputs> = useCallback(
    async (values) => {
      const res = await subscribeToMailer(values.email);

      if (!res.ok) {
        openWithContent({
          title: "Uh oh!",
          body: <SubscribeFailErrorMessage />,
        });
        return;
      }

      openWithContent({
        title: "Signup success!",
        body: "You were successfully added to our mailing list.",
      });
      form.reset();
    },
    [form, openWithContent],
  );

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex max-w-sm flex-col items-stretch gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter email here..."
                    type="email"
                    autoCapitalize="false"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Subscribe
          </Button>
        </form>
      </Form>
      {dialogNode}
    </>
  );
}

function SubscribeFailErrorMessage() {
  return (
    <>
      We were unable to subscribe you to our mailing list.
      <br />
      <br />
      If the problem continues, please reach out to one of our volunteers
      through our{" "}
      <LinkToExternal
        href={env.NEXT_PUBLIC_SC_CONTRA_FACEBOOK_LINK}
        icon={false}
      >
        Facebook group
      </LinkToExternal>{" "}
      or our{" "}
      <LinkToExternal
        href={env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL}
        icon={false}
      >
        contact form
      </LinkToExternal>
      .
    </>
  );
}
