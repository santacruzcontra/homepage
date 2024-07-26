import { Clock, MapPin } from "lucide-react";
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
import { HomePageCarousel } from "./components/HomePageCarousel/HomePageCarousel";
import { LinkToExternal } from "./components/LinkToExternal";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <HomePageCarousel />
      </div>
      <section className="flex flex-col min-[650px]:flex-row items-stretch gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-title text-3xl italic">What is Contra Dance?</h2>
          <div className="flex flex-col items-stretch gap-4 text-base">
            <p>
              Contra Dance is a traditional social dancing event with origins in
              New England and Appalachia. Each dance is taught beforehand and
              prompted by a caller using gender neutral terms (Larks / Robins).
            </p>
            <p className="font-semibold">
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
          </div>
        </div>
        <Separator orientation="vertical" className="h-auto hidden min-[650px]:block" />
        <Separator className="min-[650px]:hidden" />
        <div className="flex flex-col gap-2 min-w-[260px]">
          <h2 className="font-title text-3xl italic">Sound like fun?</h2>
          <div className="flex flex-col items-stretch gap-4">
            <div className="flex flex-col items-stretch gap-2 text-base">
              <p className="text-lg font-semibold">Join us!</p>
              <p>We meet the 4th Friday of every month at the Live Oak Grange.</p>
              <LinkToExternal
                  href="https://www.google.com/maps/search/?api=1&query=live+oak+grange+santa+cruz+ca"
                  icon={false}
              >
                <p className="flex flex-row items-center gap-2">
                  <MapPin className="text-black" />
                  <span>1900 17th Ave, Santa Cruz CA</span>
                </p>
              </LinkToExternal>
              <p className="flex flex-row items-center gap-2">
                <Clock className="mx-0.5 size-5"/>
                <span>7:00pm - 10:00pm</span>
              </p>
              <Separator/>
            </div>
            <div className="flex flex-col items-stretch gap-1 text-sm">
              <p>Before the event...</p>
              <p>5:30pm - Potluck, bring a dish to share!</p>
              <p>6:30pm - Newcomer&apos;s introduction</p>
            </div>
          </div>
        </div>
      </section>
      <Separator/>
      <section className="flex flex-col items-stretch justify-center p-8">
        <div className="flex flex-col items-stretch gap-4">
          <h2 className="font-title text-4xl italic">Common Questions</h2>
          <Separator />
        </div>
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
      </section>
      <Separator className="mt-8" />
    </>
  );
}
