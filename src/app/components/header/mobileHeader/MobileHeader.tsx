import MobileHeaderBadge from "./MobileHeaderBadge";
import MobileNav from "./MobileNav";

export default function MobileHeader() {
  return (
    <header className="relative flex flex-col desktop:hidden">
      <MobileNav />
      <MobileHeaderBadge />
    </header>
  );
}
