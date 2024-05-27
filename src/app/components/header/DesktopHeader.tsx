import { ContraLogo } from "./ContraLogo";
import { BadgeRibbon } from "./BadgeRibbon";
import { HeaderNavItem, type HeaderNavItemSubProps } from "./HeaderNavItem";

export function DesktopHeader() {
  return (
    <header className="mx-auto hidden max-w-6xl p-4 desktop:block desktop:pb-0">
      <nav className="font-title grid grid-cols-[3rem_auto_1fr] items-center justify-center px-2 py-4 text-xl tracking-wide min-[850px]:text-2xl">
        <BadgeRibbon left>
          <div>&nbsp;</div>
        </BadgeRibbon>
        <ContraLogo />
        <BadgeRibbon right>
          <DesktopHeaderNavItem href="/">Home</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/about">About</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/policies">Policies</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/contact">Contact</DesktopHeaderNavItem>
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
