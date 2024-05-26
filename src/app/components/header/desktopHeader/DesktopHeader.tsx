import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import styles from "./DesktopHeader.module.css";
import ContraLogo from "../ContraLogo";

export default function DesktopHeader() {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} desktop:block hidden`}>
      <nav className="grid grid-cols-[1fr_auto_1fr] justify-center p-4">
        <div className={`${styles.section} ${styles["left-section"]}`}>
          <div>
            <HeaderNavItem href="/about" currentPath={pathname}>
              About Us
            </HeaderNavItem>
            <HeaderNavItem href="/policies" currentPath={pathname}>
              Policies
            </HeaderNavItem>
          </div>
        </div>
        <HeaderNavItem href="/" currentPath={pathname}>
          <ContraLogo />
        </HeaderNavItem>
        <div className={`${styles.section} ${styles["right-section"]}`}>
          <div>
            <HeaderNavItem href="/contact" currentPath={pathname}>
              Contact
            </HeaderNavItem>
            <HeaderNavItem href="/more" currentPath={pathname}>
              More Events
            </HeaderNavItem>
          </div>
        </div>
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
    <Link href={href} className={currentPath === href ? styles.active : ""}>
      {children}
    </Link>
  );
}
