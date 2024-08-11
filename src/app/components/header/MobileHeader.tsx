import { MenuIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover";
import { HeaderNavItem, type HeaderNavItemSubProps } from "./HeaderNavItem";
import Link from "next/link";
import { MOBILE_HEADER_BREAKPOINT } from "~/config/constants";

export function MobileHeader() {
    return (
        <>
            <header
                className={`relative flex w-full flex-col min-[${MOBILE_HEADER_BREAKPOINT}px]:hidden`}
            >
                <MobilePopoverNav />
                <div className="flex flex-col items-start gap-2 p-4">
                    <Link href="/">
                        <h1 className="font-title text-xl min-[400px]:text-2xl">
                            Santa Cruz Contra Dance
                        </h1>
                    </Link>
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
            <PopoverTrigger className="absolute right-2.5 top-2.5 min-[400px]:right-3 min-[400px]:top-3">
                <MenuIcon
                    className={`size-10 rounded-md border-[1px] border-[#bf490e] bg-[#ffbf69] stroke-2 p-1 text-[#bf490e] active:border-opacity-30 active:bg-opacity-30 active:text-opacity-60 min-[650px]:size-12 min-[650px]:p-2 md:size-14 ${navOpen ? "border-opacity-25 bg-opacity-30 text-opacity-60" : "border-opacity-0 bg-opacity-0 text-opacity-40"}`}
                />
            </PopoverTrigger>
            <PopoverContent
                side="bottom"
                className="desktop:hidden mr-2 w-fit border-[#bf490e] p-0"
                onClick={closeNav}
            >
                <nav className="flex flex-col items-stretch gap-0">
                    <MobileHeaderNavItem href="/">Home</MobileHeaderNavItem>
                    <MobileHeaderNavItem href="/policies">
                        Policies
                    </MobileHeaderNavItem>
                    {/*<MobileHeaderNavItem href="/events">Events</MobileHeaderNavItem>*/}
                    <MobileHeaderNavItem href="/contact">
                        Contact
                    </MobileHeaderNavItem>
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
            className="border-b-[1px] border-[#bf490e] border-opacity-50 py-3 pl-12 pr-6 text-right font-title text-xl font-medium last:border-b-0"
            {...props}
        />
    );
}
