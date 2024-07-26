import { SubscribeEmailForm } from "./SubscribeEmailForm";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { env } from "~/env";
import { ExternalLinkIcon } from "lucide-react";
import {Separator} from "~/components/ui/separator";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col min-[650px]:grid items-center min-[650px]:items-stretch gap-4 min-[650px]:grid-cols-[1fr_1px_1fr] min-[650px]:py-8">
        <SubscribeNewsletterCard />
        <Separator orientation="vertical" className="h-auto hidden min-[650px]:block" />
        <Separator className="min-[650px]:hidden" />
        <FormLinkCard />
      </div>
    </>
  );
}

function FormLinkCard() {
  return (
      <div className="max-w-[400px] flex flex-col items-stretch gap-4">
          <h2 className="font-title italic text-2xl min-[700px]:text-3xl">Message our volunteers</h2>
          <p>
              Send us a message if you&apos;d like to sponsor a dance, volunteer, or
              offer up a suggestion.
          </p>
          <p>
              The following button will open a form where you can easily send us an
              email. Our volunteers will respond as soon as they can!
          </p>
          <div className="flex-grow flex flex-col justify-end">
              <Link href={env.GOOGLE_CONTACT_FORM_URL} target="_blank">
                  <Button className="w-full h-12 text-base">
                      Send message&nbsp;&nbsp;&nbsp;
                      <ExternalLinkIcon />
                  </Button>
              </Link>
          </div>
      </div>
  );
}

function SubscribeNewsletterCard() {
    return (
        <div className="max-w-[400px] flex flex-col items-stretch justify-between gap-4">
            <h2 className="font-title italic text-2xl min-[700px]:text-3xl">Get the newsletter</h2>
            <p>
                Enter your email to subscribe to our monthly newsletter and hear about
                upcoming events.
            </p>
            <div className="flex-grow flex flex-col justify-end">
                <SubscribeEmailForm/>
            </div>
        </div>
    );
}
