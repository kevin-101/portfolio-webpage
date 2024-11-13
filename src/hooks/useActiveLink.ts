import { createContext, useContext } from "react";
import { ActiveLink } from "../components/NavBar";

type ActiveLinkContextType = {
  activeLink: ActiveLink | null;
  setActiveLink: React.Dispatch<React.SetStateAction<ActiveLink>> | null;
};

export const ActiveLinkContext = createContext<ActiveLinkContextType>({
  activeLink: null,
  setActiveLink: null,
});

export const useActiveLink = () => useContext(ActiveLinkContext);
