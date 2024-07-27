import {MenuIcon} from "lucide-react";
import {useCallback, useState} from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "~/components/ui/popover";
import {HeaderNavItem, type HeaderNavItemSubProps} from "./HeaderNavItem";
import {Separator} from "~/components/ui/separator";

export function MobileHeader() {
	return (
		<>
			<header className="relative flex flex-col min-[650px]:hidden w-full">
				<MobilePopoverNav/>
				<div className="flex flex-col items-start gap-2 p-4">
					<h1 className="font-title text-lg min-[500px]:text-2xl">Santa Cruz Contra Dance</h1>
				</div>
			</header>
		</>
	);
}

function MobilePopoverNav() {
	const [navOpen, setNavOpen] = useState(false);
	const closeNav = useCallback(() => {
		setNavOpen(false);
	}, [setNavOpen]);

	return (
		<Popover open={navOpen} onOpenChange={setNavOpen}>
			<PopoverTrigger className="absolute right-2.5 top-2.5 min-[500px]:top-3 min-[500px]:right-3">
				<MenuIcon
					className={`size-10 rounded-md border-[1px] border-[#bf490e] bg-[#ffbf69] stroke-2 p-1 text-[#bf490e] active:border-opacity-30 active:bg-opacity-30 active:text-opacity-60 sm:size-12 sm:p-2 md:size-14 ${navOpen ? "border-opacity-25 bg-opacity-30 text-opacity-60" : "border-opacity-0 bg-opacity-0 text-opacity-40"}`}
				/>
			</PopoverTrigger>
			<PopoverContent
				side="bottom"
				className="mr-2 w-fit p-0 desktop:hidden border-[#bf490e]"
				onClick={closeNav}
			>
				<nav className="flex flex-col items-stretch gap-0">
					<MobileHeaderNavItem href="/">Home</MobileHeaderNavItem>
					{/*<MobileHeaderNavItem href="/events">Events</MobileHeaderNavItem>*/}
					<MobileHeaderNavItem href="/contact">Contact</MobileHeaderNavItem>
					<MobileHeaderNavItem href="/policies">Policies</MobileHeaderNavItem>
				</nav>
			</PopoverContent>
		</Popover>
	);
}

function MobileHeaderNavItem({
	activeClassStr = "bg-[#db7c26] bg-opacity-20",
	...props
}: HeaderNavItemSubProps) {
	return (
		<HeaderNavItem
			activeClassStr={activeClassStr}
			className="border-b-[1px] border-[#bf490e] border-opacity-50 py-3 pl-12 pr-6 text-right font-title text-xl font-medium last:border-b-0 smNotShort:py-5 smNotShort:pl-20 smNotShort:pr-10 smNotShort:text-3xl"
			{...props}
		/>
	);
}
