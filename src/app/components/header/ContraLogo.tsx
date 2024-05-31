import Image, { type ImageProps } from "next/image";
import contraLogo from "./contra-logo-framed.png";
import { type OptionalKeys } from "~/utilTypes";
import Link from "next/link";

export function ContraLogo({
  height = 200,
  alt = "Round-framed ai-generated image of 8 contra dance goers on a gold background.",
  className = "",
  src = contraLogo,
  ...props
}: OptionalKeys<ImageProps, "src" | "alt">) {
  return (
    <Link href="/" className="-mx-4 rounded-full">
      <Image
        priority
        src={src}
        className={"relative z-10 rounded-full " + className}
        alt={alt}
        height={height}
        {...props}
      />
    </Link>
  );
}
