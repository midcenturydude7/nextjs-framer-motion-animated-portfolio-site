"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { cn } from "../../../lib/utils";
import { useNavContext } from "../../../contexts/NavContext";

export default function Navbar({ focused, setFocused }) {
  const { selectedTab, setSelectedTab } = useNavContext();
  
  return (
    <nav className="nav-container lg:flex lg:flex-grow lg:justify-center">
      <ul
        onPointerLeave={() => setFocused(null)}
        className="nav-wrapper space-x-4 border-slate-300/10 bg-gradient-to-b from-[rgba(21,24,43,0.75)] to-[rgba(0,0,0,0.17)] py-[0.5rem] pl-6 pr-[1.8rem]"
      ></ul>
    </nav>
  );
}
