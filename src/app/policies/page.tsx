import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import {Separator} from "~/components/ui/separator";

export default function PoliciesPage() {
	return (
		<section className="w-full p-4 flex flex-col items-stretch">
			<div className="flex flex-col items-stretch gap-4">
				<h2 className="font-title text-4xl italic">Event Policies</h2>
				<Separator/>
			</div>
			<Accordion type="single" collapsible>
				<AccordionItem value="substances">
					<AccordionTrigger>
						The dance is an alcohol-free, drug-free, and smoke-free event.
					</AccordionTrigger>
					<AccordionContent>
						This includes any form of smoking, including vaping.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="scent">
					<AccordionTrigger>
						The dance is a scent-free event.
					</AccordionTrigger>
					<AccordionContent>
						In order to protect those with chemical sensitivities, please
						refrain from using scented products on your body, clothes, and
						belongings.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="harrassment">
					<AccordionTrigger>
						Harassment of any kind will not be tolerated.
					</AccordionTrigger>
					<AccordionContent>
						We want everyone to feel safe and comfortable at our dance,
						and we value and <em>expect</em> consent, communication,
						community-mindedness, and safety. If someone&apos;s behavior
						is offensive or harassing during the dance, you should
						endeavor to speak up for yourself. If you need help, talk with
						one of the managers, sound tech, or caller.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="health">
					<AccordionTrigger>
						You should not come to the dance if you are unwell.
					</AccordionTrigger>
					<AccordionContent>
						Please do not come if you have health concerns for yourself or
						a close contact, or if you have had a positive test for COVID
						19, have any symptoms of an illness, or are not feeling well.
						<br/>
						<br/>
						We each understand and accept the inherent risks of
						contracting COVID-19 or any other illness at this dance. By
						participating in this event, you take full responsibility for
						your own health and well-being.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="payment">
					<AccordionTrigger>
						We suggest a $15-$30 donation per attendee.
					</AccordionTrigger>
					<AccordionContent>
						We appreciate and rely on your generous donations to pay for
						our dance hall and the excellent staff. Only the caller,
						musicians, and sound tech will be paid. All other staff and
						helpers will be volunteering their time.
						<br/>
						<br/>
						Please bring cash to the dance hall, but it is{" "}
						<b>pay what you can</b> - we need you dancing more than we
						need your money!{" "}
						<span className="underline">
			                    No one will be turned away for lack of funds.
			                  </span>
						<br/>
						<br/>
						So, please come, even if you feel like you need to put in less
						than $15. If you can put in over $30, that would be great,
						too! In a pinch, we can take Venmo or Paypal.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="helpingOut">
					<AccordionTrigger>
						Please help out wherever you can.
					</AccordionTrigger>
					<AccordionContent>
						This can include, but is not limited to, setting up chairs,
						cleaning up the kitchen or the dance hall, sitting out one
						dance at the door, etc. These events rely on volunteers and
						community support.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="friends">
					<AccordionTrigger>Please bring your friends!</AccordionTrigger>
					<AccordionContent>
						The more the merrier! Bring your friends and tell them to wear
						light, comfortable clothing and comfortable shoes with clean,
						non-marking soles.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
