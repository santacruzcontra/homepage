import { MenuIcon } from "lucide-react";
import ContraLogo from "../ContraLogo";
import styles from "./MobileHeader.module.css";

export default function MobileHeader() {
  return (
    <header
      className={`desktop:hidden relative flex flex-col ${styles.header}`}
    >
      <MenuIcon strokeWidth={2} size={36} className="absolute right-2 top-2" />
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
          <div className="-mr-2 border-y-2 border-black py-1">
            <div className="border-y-4 border-black py-2"></div>
          </div>
          <ContraLogo height={128} />
          <div className="-ml-2 border-y-2 border-black py-1">
            <div className="border-y-4 border-black py-2"></div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl">Santa Cruz Contra</h2>
      </div>
    </header>
  );
}
