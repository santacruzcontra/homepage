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
  activeClassStr: _rawActiveClassStr,
  className,
  children,
}: HeaderNavItemProps) {
  const currentPath = usePathname();

  const interactionClassStr = _rawActiveClassStr
    .split(/\s/g)
    .reduce((res, part) => `${res} active:${part} hover:${part}`, "");

  return (
    <Link
      href={href}
      className={`${currentPath === href ? _rawActiveClassStr : ""} ${interactionClassStr}${className ? " " + className : ""}`}
    >
      {children}
    </Link>
  );
}
