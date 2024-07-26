import {HeaderNavItem, type HeaderNavItemSubProps} from "./HeaderNavItem";

export function DesktopHeader() {
	return (
		<header className="flex flex-col gap-2 w-full">
            <h1 className="w-full text-center font-title text-4xl">Santa Cruz Contra Dance</h1>
			<nav className="w-full flex flex-row gap-8 text-xl justify-center h-10 items-center">
				<DesktopHeaderNavItem href="/">Home</DesktopHeaderNavItem>
				<DesktopHeaderNavItem href="/policies">Policies</DesktopHeaderNavItem>
				<DesktopHeaderNavItem href="/contact">Contact</DesktopHeaderNavItem>
			</nav>
		</header>
	);
}

function DesktopHeaderNavItem({
	activeClassStr = "underline",
	...props
}: HeaderNavItemSubProps) {
	return (
		<HeaderNavItem
			activeClassStr={activeClassStr}
			className="hover:underline active:underline"
			{...props}
		/>
	);
}
