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

type FormInputs = z.infer<typeof EmailFormSchema>;

export function SubscribeEmailForm() {
  const form = useForm<FormInputs>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = useCallback((values: FormInputs) => {
    console.log("TODO BUILD PROPER FORM HANDLING", values);
  }, []);

  return (
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
  );
}
