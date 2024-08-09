import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";

export function LinkToExternal({
    className,
    children,
    icon = true,
    target = "_blank",
    ...props
}: React.ComponentProps<typeof Link> & { icon?: boolean }) {
    return (
        <Link
            className={cn(
                className,
                "inline-flex flex-row items-center gap-2 text-[#bf490e] underline hover:text-opacity-80",
            )}
            target={target}
            {...props}
        >
            {typeof children === "string" ? <span>{children}</span> : children}
            {icon && <ExternalLink className="size-5" />}
        </Link>
    );
}
