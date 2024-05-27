"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const subscribeFormSchema = z.object({
  email: z.string().email("Must provide a valid email address."),
});

export function SubscribeEmailForm() {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = useCallback(
    (values: z.infer<typeof subscribeFormSchema>) => {
      console.log("TODO BUILD PROPER FORM HANDLING", values);
    },
    [],
  );

  return (
    <div className="m-auto p-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex max-w-sm flex-col items-stretch gap-4 rounded-sm border-2 border-[#B3895D] border-opacity-30 bg-[#D6AB7D] bg-opacity-30 p-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter email address</FormLabel>
                <FormControl>
                  <Input placeholder="Example: test@test.com" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription className="text-stone-700">
                  Enter your email to subscribe to our monthly newsletter and
                  hear about upcoming dances.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
}
