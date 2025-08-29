"use client";
import React from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { useNavContext } from "../../../contexts/NavContext";

export default function MobileNav({ focused, setFocused }) {
  const { selectedTab, setSelectedTab } = useNavContext();
  const [mobileNavBar, toggleMobileNavBar] = useCycle(false, true);

  return <nav className="ml-auto px-8 py-4 lg:hidden">MobileNav</nav>;
}
