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

function headerNavInteractionStr(rawActiveClassStr: string) {
  return rawActiveClassStr
    .split(/\s/g)
    .reduce((res, part) => `${res} active:${part} hover:${part}`, "");
}

export function HeaderNavItem({
  href,
  activeClassStr,
  className,
  children,
}: HeaderNavItemProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={`${currentPath === href ? activeClassStr : ""} ${headerNavInteractionStr(activeClassStr)}${className ? " " + className : ""}`}
    >
      {children}
    </Link>
  );
}
