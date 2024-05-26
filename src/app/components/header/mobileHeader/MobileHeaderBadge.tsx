import ContraLogo from "../ContraLogo";
import BadgeRibbon from "../BadgeRibbon";

export default function MobileHeaderBadge() {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-4">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
        <BadgeRibbon left />
        <ContraLogo height={128} />
        <BadgeRibbon right />
      </div>
      <h2 className="font-title text-4xl md:text-5xl">Santa Cruz Contra</h2>
    </div>
  );
}
