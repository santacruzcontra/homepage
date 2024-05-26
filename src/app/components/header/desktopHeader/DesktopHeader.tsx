import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import ContraLogo from "../ContraLogo";
import BadgeRibbon from "../BadgeRibbon";

export default function DesktopHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto hidden max-w-5xl p-4 desktop:block">
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center justify-center px-2 py-4">
        <BadgeRibbon left>
          <HeaderNavItem href="/about" currentPath={pathname}>
            About Us
          </HeaderNavItem>
          <HeaderNavItem href="/policies" currentPath={pathname}>
            Policies
          </HeaderNavItem>
        </BadgeRibbon>
        <HeaderNavItem href="/" currentPath={pathname}>
          <ContraLogo />
        </HeaderNavItem>
        <BadgeRibbon right>
          <HeaderNavItem href="/contact" currentPath={pathname}>
            Contact
          </HeaderNavItem>
          <HeaderNavItem href="/more" currentPath={pathname}>
            More Events
          </HeaderNavItem>
        </BadgeRibbon>
      </nav>
    </header>
  );
}

function HeaderNavItem({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`font-title text-2xl tracking-wide ${currentPath === href ? "underline" : ""} hover:underline`}
    >
      {children}
    </Link>
  );
}
