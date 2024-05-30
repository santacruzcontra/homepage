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

  const [dialogNode, openWithContent, dialog] = useAlertDialog();

  const onSubmit: SubmitHandler<FormInputs> = useCallback(
    async (values) => {
      const res = await subscribeToMailer(values.email);

      if (!res.ok && res.status === 409) {
        openWithContent({
          title: "Hello again!",
          body: <AlreadySubbedErrorMessage />,
        });
        form.reset();
        return;
      }

      if (!res.ok && res.status === 403) {
        openWithContent({
          title: "Hello again!",
          body: <ManualResubscribe closeDialog={dialog.close} />,
          button: "Nevermind",
          buttonVariant: "outline",
        });
        form.reset();
        return;
      }

      if (!res.ok) {
        return openWithContent({
          title: "Uh oh!",
          body: <SubscribeFailErrorMessage />,
        });
      }

      openWithContent({
        title: "Success!",
        body: "You have been added to our mailing list.",
      });
      form.reset();
    },
    [form, openWithContent, dialog],
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

function AlreadySubbedErrorMessage() {
  return (
    <>
      Looks like you&apos;re already subscribed.
      <br />
      <br />
      If you believe this is incorrect, <PleaseReachOut />.
    </>
  );
}

function SubscribeFailErrorMessage() {
  return (
    <>
      We were unable to subscribe you to our mailing list.
      <br />
      <br />
      If the problem continues, <PleaseReachOut />.
    </>
  );
}

function ManualResubscribe({ closeDialog }: { closeDialog: () => void }) {
  return (
    <>
      Looks like you were previously unsubscribed from our mailing list.
      <br />
      <br />
      In order to protect your privacy, you must sign up through our official
      form if you wish to re-subscribe.
      <br />
      <br />
      <LinkToExternal
        href={env.NEXT_PUBLIC_MAILCHIMP_SIGNUP_FORM_URL}
        icon={false}
        className="w-full"
      >
        <Button className="w-full" onClick={closeDialog}>
          Open signup form
        </Button>
      </LinkToExternal>
    </>
  );
}

function PleaseReachOut() {
  return (
    <>
      please reach out to one of our volunteers through our{" "}
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
    </>
  );
}
