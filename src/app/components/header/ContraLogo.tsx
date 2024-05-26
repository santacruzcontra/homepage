import Image, { type ImageProps } from "next/image";
import contraLogo from "./contra-logo-framed.png";
import { type OptionalKeys } from "~/utilTypes";

export default function ContraLogo({
  height = 200,
  alt = "Round-framed image of 8 contra dance goers on a gold background.",
  className = "",
  src = contraLogo,
  ...props
}: OptionalKeys<ImageProps, "src" | "alt">) {
  return (
    <Image
      src={src}
      className={"relative z-10 rounded-full " + className}
      alt={alt}
      height={height}
      {...props}
    />
  );
}
