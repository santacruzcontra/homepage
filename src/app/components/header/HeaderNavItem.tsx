import Link from "next/link";
import { usePathname } from "next/navigation";
import { type OptionalKeys } from "~/utilTypes";

export type HeaderNavItemProps = React.PropsWithChildren<{
  href: string;
  activeClassStr: string;
  className?: string;
}>;

export type HeaderNavItemSubProps = OptionalKeys<
  HeaderNavItemProps,
  "activeClassStr"
>;

export function HeaderNavItem({
  href,
  activeClassStr,
  className,
  children,
}: HeaderNavItemProps) {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`${isActive ? activeClassStr : ""}${className && isActive ? " " : ""}${className ? className : ""}`}
    >
      {children}
    </Link>
  );
}
