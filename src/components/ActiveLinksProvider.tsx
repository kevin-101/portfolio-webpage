import { useState } from "react";
import { ActiveLinks } from "./NavBar";
import { ActiveLinksContext } from "../hooks/useActiveLinks";

export default function ActiveLinksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState<ActiveLinks>("about");

  return (
    <ActiveLinksContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinksContext.Provider>
  );
}
