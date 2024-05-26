import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import Image from "next/image";
import contraLogo from "../contra-logo-framed.png";
import styles from "./DesktopHeader.module.css";

export default function DesktopHeader() {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} desktop:block hidden`}>
      <nav className="grid grid-cols-[1fr_auto_1fr] justify-center p-4">
        <div className={`${styles.section} ${styles["left-section"]}`}>
          <div>
            <HeaderNavItem href="/about" currentPath={pathname}>
              Home
            </HeaderNavItem>
            <HeaderNavItem href="/policies" currentPath={pathname}>
              Policies
            </HeaderNavItem>
          </div>
        </div>
        <HeaderNavItem href="/" currentPath={pathname}>
          <Image
            src={contraLogo}
            className="relative z-10 rounded-full "
            alt="Round-framed image of 8 contra dance goers."
            height={200}
          />
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
