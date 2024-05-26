"use client";

import DesktopHeader from "./desktopHeader/DesktopHeader";
import MobileHeader from "./mobileHeader/MobileHeader";

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
