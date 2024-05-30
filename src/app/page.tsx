import { Clock, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { env } from "~/env";
import { cn } from "~/lib/utils";
import { HomePageCarousel } from "./components/HomePageCarousel/HomePageCarousel";
import { PageTitle } from "./components/PageTitle";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <PageTitle>Santa Cruz Contra</PageTitle>
      <h2 className="text-md w-full text-center font-medium sm:text-2xl">
        4th Friday, Every Month
      </h2>
      <div className="flex w-full flex-col items-center p-4 pb-0">
        <HomePageCarousel />
      </div>
      <section className="m-auto flex w-full flex-row flex-wrap items-start justify-center gap-4 p-4">
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>What is Contra Dance?</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p>
              Contra Dance is a traditional social dancing event with origins in
              New England and Appalachia. Each dance is taught beforehand and
              prompted by a caller using gender neutral terms (Larks / Robins).
            </p>
            <p className="font-bold">
              No dancing experience or dance partner is necessary!
            </p>
            <Separator />
            <p>
              It&apos;s <em>beginner-friendly</em> and easy to learn - just
              follow the instructions! We offer an optional
              &ldquo;Beginner&apos;s Workshop&rdquo; 30 minutes before
              each&nbsp;dance.
            </p>
            <p>
              Our dances <span className="underline">always</span> feature live
              music and average about 30 - 40 new and experienced dancers. There
              is a break midway with plenty of time to socialize and meet
              new&nbsp;folks.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-sm">
          <CardHeader className="pb-2">
            <CardTitle>Sound like fun?</CardTitle>
            <CardTitle className="text-lg font-medium">Join us!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p>We meet the 4th Friday of every month at the Live Oak Grange.</p>
            <LinkToExternal
              href="https://www.google.com/maps/search/?api=1&query=live+oak+grange+santa+cruz+ca"
              icon={false}
            >
              <p className="flex flex-row items-center gap-2">
                <MapPin />
                <span>1900 17th Ave, Santa Cruz CA</span>
              </p>
            </LinkToExternal>
            <p className="flex flex-row items-center gap-2">
              <Clock className="mx-0.5 size-5" />
              <span>7:00pm - 10:00pm</span>
            </p>
            <Separator />
            <CardDescription>Before the event...</CardDescription>
            <CardDescription>
              5:30pm - Potluck, bring a dish to share!
            </CardDescription>
            <CardDescription>
              6:30pm - Newcomer&apos;s introduction
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Separator />
            <Accordion type="single" collapsible>
              <AccordionItem value="partner">
                <AccordionTrigger>Do I need a partner?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    No! Many of our dancers come alone, and those who come with
                    others will usually switch partners between dances. Come
                    alone or bring some friends!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="whatToWear">
                <AccordionTrigger>What should I bring?</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4">
                    <li>
                      Comfortable, non-marking shoes to protect your feet and
                      our floors.
                    </li>
                    <li>
                      Loose-fitting and light-weight clothing to keep you cool.
                    </li>
                    <li>A water bottle is recommended.</li>
                    <li>
                      Avoid strong fragrances as many of our dancers have
                      sensitivities.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="who">
                <AccordionTrigger>Who hosts the events?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Our events are hosted by Dance Inclusion of Santa Cruz
                    County, a non-profit organization made up of a number of
                    dedicated volunteers and community members from all over.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost">
                <AccordionTrigger>How much does it cost?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p>
                    Admission is sliding scale: $15-$30 or pay what you can
                    (Cash or Check only).
                  </p>
                  <p>
                    That said, we&apos;re a non-profit, and we want you to come
                    dance more than we want your money! No one will be turned
                    away for lack of funds.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="contribute">
                <AccordionTrigger>How can I contribute?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    You can contribute by volunteering to help us with our
                    events, or by donating to our non-profit organization. Speak
                    to one of our managers at a dance, reach out to one of the
                    admins on our{" "}
                    <LinkToExternal
                      href={env.SC_CONTRA_FACEBOOK_LINK}
                      icon={false}
                    >
                      Facebook group
                    </LinkToExternal>
                    , or send us a message through our{" "}
                    <LinkToExternal
                      href={env.GOOGLE_CONTACT_FORM_URL}
                      icon={false}
                    >
                      contact form
                    </LinkToExternal>
                    .
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="learnMore">
                <AccordionTrigger>Where can I learn more?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p>
                    There are many resources and videos across the web where you
                    can learn more about Contra Dance. Here are some video links
                    to get you started:
                  </p>
                  <ul className="flex list-disc flex-col gap-2 p-2 pl-4">
                    <li>
                      <LinkToExternal href="https://youtu.be/T9_Qbnpplgc">
                        Beginner? Just have fun!
                      </LinkToExternal>
                    </li>
                    <li>
                      <LinkToExternal href="https://youtu.be/wsCOSdx1E9E">
                        Contra Dance Camp 2023
                      </LinkToExternal>
                    </li>
                    <li>
                      <LinkToExternal href="https://youtu.be/jcYOIXIMfJQ">
                        Experienced Contra Dancers
                      </LinkToExternal>
                    </li>
                    <li>
                      <LinkToExternal href="https://youtu.be/M_-qnZ0_fbE">
                        Queer Contra in SF bay
                      </LinkToExternal>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
      <section className="m-auto w-full max-w-4xl p-4"></section>
    </>
  );
}

function LinkToExternal({
  className,
  children,
  icon = true,
  target = "_blank",
  ...props
}: React.ComponentProps<typeof Link> & { icon?: boolean }) {
  return (
    <Link
      className={cn(
        className,
        "inline-flex flex-row items-center gap-2 text-[#482919] underline hover:text-opacity-80",
      )}
      target={target}
      {...props}
    >
      <span>{children}</span>
      {icon && <ExternalLink className="size-5" />}
    </Link>
  );
}
