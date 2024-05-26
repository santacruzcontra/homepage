import { MenuIcon } from "lucide-react";
import { BadgeRibbon } from "./BadgeRibbon";
import { ContraLogo } from "./ContraLogo";

export function MobileHeader() {
  return (
    <header className="relative flex flex-col desktop:hidden">
      <MenuIcon
        size={36}
        className="absolute right-2 top-2 stroke-2 text-stone-800 text-opacity-60 hover:text-opacity-100 active:text-opacity-100"
      />
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
