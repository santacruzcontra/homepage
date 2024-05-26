import { MenuIcon } from "lucide-react";
import { BadgeRibbon } from "./BadgeRibbon";
import { ContraLogo } from "./ContraLogo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useState } from "react";

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

  return (
    <Popover open={navOpen} onOpenChange={setNavOpen}>
      <PopoverTrigger className="absolute right-2 top-2">
        <MenuIcon
          className={`size-10 rounded-md border-[1px] border-[#B3895D] bg-[#D6AB7D] stroke-2 p-1 text-[#482919] active:border-opacity-30 active:bg-opacity-30 active:text-opacity-80 ${navOpen ? "border-opacity-25 bg-opacity-30 text-opacity-80" : "border-opacity-0 bg-opacity-0 text-opacity-60"}`}
        />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        className="mr-2 border-[#B3895D] bg-[#E5C9AE]"
      >
        <p>test popover content</p>
      </PopoverContent>
    </Popover>
  );
}
