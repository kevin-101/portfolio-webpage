import { createContext, useContext } from "react";
import { ActiveLinks } from "../components/NavBar";

type ActiveLinksContextType = {
  activeLink: ActiveLinks | null;
  setActiveLink: React.Dispatch<React.SetStateAction<ActiveLinks>> | null;
};

export const ActiveLinksContext = createContext<ActiveLinksContextType>({
  activeLink: null,
  setActiveLink: null,
});

export const useActiveLink = () => useContext(ActiveLinksContext);
