import Image from "next/image";
import scContraLogo from './sc_contra_logo.png';
import {LinkToExternal} from "~/app/components/LinkToExternal";

export function Footer()
{
	return (
		<footer className="flex items-center justify-center m-auto p-4 min-[650px]:p-8">
			<div className="grid grid-cols-[1fr_2.75fr] min-[650px]:grid-cols-[1fr_360px] grid-rows-[max-content_max-content_max-content] gap-x-1 min-[650px]:gap-x-4 gap-y-1 items-evenly text-xs min-[650px]:text-lg">
				<Image
					src={scContraLogo}
					alt="Dance Inclusion of Santa Cruz County logo, with a piano, some dancers, and a fiddle."
					className="row-span-3"
				/>
				<p className="flex flex-col justify-center">
					Dance Inclusion of Santa Cruz County<br />
					12705 Highway 9<br />
					Boulder Creek, CA 95006-9112
				</p>
				<p className="flex flex-col justify-center">
					<LinkToExternal href="https://joycefortune.us8.list-manage.com/vcard?u=765629d3676f3009146b46e24&id=dd198a2a59">
						Add us to your address book
					</LinkToExternal>
				</p>
				<p className="flex flex-col justify-center font-title italic">
					Copyright &copy; 2024 Dance Inclusion of Santa Cruz County, all rights reserved.
				</p>
			</div>
		</footer>
	);
}
