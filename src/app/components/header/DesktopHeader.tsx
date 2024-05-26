import { usePathname } from "next/navigation";
import { ContraLogo } from "./ContraLogo";
import { BadgeRibbon } from "./BadgeRibbon";
import { HeaderNavItem, type HeaderNavItemSubProps } from "./HeaderNavItem";

export function DesktopHeader() {
  return (
    <header className="mx-auto hidden max-w-5xl p-4 desktop:block">
      <nav className="font-title grid grid-cols-[1fr_auto_1fr] items-center justify-center px-2 py-4 text-2xl tracking-wide ">
        <BadgeRibbon left>
          <DesktopHeaderNavItem href="/about">About Us</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/policies">Policies</DesktopHeaderNavItem>
        </BadgeRibbon>
        <DesktopHeaderNavItem href="/">
          <ContraLogo />
        </DesktopHeaderNavItem>
        <BadgeRibbon right>
          <DesktopHeaderNavItem href="/contact">Contact</DesktopHeaderNavItem>
          <DesktopHeaderNavItem href="/more">More Events</DesktopHeaderNavItem>
        </BadgeRibbon>
      </nav>
    </header>
  );
}

function DesktopHeaderNavItem({
  activeClassStr = "underline",
  ...props
}: HeaderNavItemSubProps) {
  return <HeaderNavItem activeClassStr={activeClassStr} {...props} />;
}
