import { useState } from "react";
import { ActiveLink } from "./NavBar";
import { ActiveLinkContext } from "../hooks/useActiveLink";

export default function ActiveLinkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState<ActiveLink>("about");

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
}
