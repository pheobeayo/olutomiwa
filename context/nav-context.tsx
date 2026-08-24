"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type NavContextValue = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const value = useMemo(
    () => ({ menuOpen, toggleMenu, closeMenu }),
    [menuOpen, toggleMenu, closeMenu],
  );
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within a NavProvider");
  return ctx;
}
