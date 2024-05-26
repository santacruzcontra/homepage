import { MenuIcon } from "lucide-react";
import { BadgeRibbon } from "./BadgeRibbon";
import { ContraLogo } from "./ContraLogo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useCallback, useState } from "react";
import { HeaderNavItem, type HeaderNavItemSubProps } from "./HeaderNavItem";

export function MobileHeader() {
  return (
    <header className="relative flex flex-col desktop:hidden">
      <MobilePopoverNav />
      <div className="flex flex-col items-center gap-2 px-2 py-4">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
          <BadgeRibbon left />
          <ContraLogo height={128} />
          <BadgeRibbon right />
        </div>
        <h2 className="font-title text-4xl md:text-5xl">Santa Cruz Contra</h2>
      </div>
    </header>
  );
}

function MobilePopoverNav() {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = useCallback(() => {
    setNavOpen(false);
  }, [setNavOpen]);

  return (
    <Popover open={navOpen} onOpenChange={setNavOpen}>
      <PopoverTrigger className="absolute right-2 top-2">
        <MenuIcon
          className={`size-10 rounded-md border-[1px] border-[#B3895D] bg-[#D6AB7D] stroke-2 p-1 text-[#482919] active:border-opacity-30 active:bg-opacity-30 active:text-opacity-80 ${navOpen ? "border-opacity-25 bg-opacity-30 text-opacity-80" : "border-opacity-0 bg-opacity-0 text-opacity-60"}`}
        />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        className="mr-2 w-fit p-0"
        onClick={closeNav}
      >
        <nav className="font-title flex flex-col items-stretch gap-0 text-right text-xl tracking-wide">
          <MobileHeaderNavItem href="/">Home</MobileHeaderNavItem>
          <MobileHeaderNavItem href="/about">About Us</MobileHeaderNavItem>
          <MobileHeaderNavItem href="/policies">Policies</MobileHeaderNavItem>
          <MobileHeaderNavItem href="/contact">Contact</MobileHeaderNavItem>
          <MobileHeaderNavItem href="/more">More Events</MobileHeaderNavItem>
        </nav>
      </PopoverContent>
    </Popover>
  );
}

function MobileHeaderNavItem({
  activeClassStr = "bg-[#7A7265] bg-opacity-20",
  ...props
}: HeaderNavItemSubProps) {
  return (
    <HeaderNavItem
      activeClassStr={activeClassStr}
      className="border-b-[1px] border-[#B3895D] border-opacity-50 px-6 py-3 last:border-b-0"
      {...props}
    />
  );
}
