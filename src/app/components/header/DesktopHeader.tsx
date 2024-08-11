import { HeaderNavItem, type HeaderNavItemSubProps } from "./HeaderNavItem";
import Link from "next/link";

export function DesktopHeader() {
    return (
        <header className={`hidden w-full flex-col gap-2 min-[650px]:flex`}>
            <Link href="/">
                <h1 className="w-full text-center font-title text-4xl">
                    Santa Cruz Contra Dance
                </h1>
            </Link>
            <nav className="flex h-10 w-full flex-row items-center justify-center gap-8 text-xl">
                <DesktopHeaderNavItem href="/">Home</DesktopHeaderNavItem>
                <DesktopHeaderNavItem href="/policies">
                    Policies
                </DesktopHeaderNavItem>
                <DesktopHeaderNavItem href="/contact">
                    Contact
                </DesktopHeaderNavItem>
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
