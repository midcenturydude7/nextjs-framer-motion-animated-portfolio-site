"use client";
import { NavProvider } from "../../contexts/NavContext";

export default function ClientLayout({ children }) {
  return <NavProvider>{children}</NavProvider>;
}

// This file is necessary to wrap the application in the NavProvider context
// so that both Navbar and MobileNav components can share state.