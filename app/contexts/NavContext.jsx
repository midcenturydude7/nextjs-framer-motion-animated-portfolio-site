"use client";
import React from "react";
import { usePathname } from "next/navigation";

// Create a context for managing state between Navbar and MobileNav components
const NavContext = React.createContext({
  selectedTab: "",
  setSelectedTab: () => {},
});

// Create a provider component
export function NavProvider({ children }) {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = React.useState("/");

  // Initialize with the current pathname when it becomes available
  React.useEffect(() => {
    if (pathname) {
      setSelectedTab(pathname);
    }
  }, [pathname]);

  return (
    <NavContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </NavContext.Provider>
  );
}

// Create a custom hook to use the context
export function useNavContext() {
  const context = React.useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
}
