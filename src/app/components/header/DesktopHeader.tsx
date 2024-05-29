import { ContraLogo } from "./ContraLogo";
import { BadgeRibbon } from "./BadgeRibbon";
import { HeaderNavItem, type HeaderNavItemSubProps } from "./HeaderNavItem";

export function DesktopHeader() {
  return (
    <header className="mx-auto hidden max-w-6xl p-4 desktop:block">
      <nav className="-mx-4 grid grid-cols-[1fr_auto_1fr] items-center justify-center px-2 py-4 font-title text-xl tracking-wide [@media(min-width:850px)]:text-2xl">
        <BadgeRibbon left>
          <DesktopHeaderNavItem href="/">Home</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/contact">Contact</DesktopHeaderNavItem>
        </BadgeRibbon>
        <ContraLogo />
        <BadgeRibbon right>
          <DesktopHeaderNavItem href="/policies">Policies</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/events">Events</DesktopHeaderNavItem>
        </BadgeRibbon>
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
