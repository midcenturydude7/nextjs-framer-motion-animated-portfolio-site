"use client";
import React from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import { useNavContext } from "../../../contexts/NavContext";
import { menuSlide, slide } from "../../../lib/anim";
import Curve from "./Curve/Curve";

export default function MobileNav({ focused, setFocused }) {
  const { selectedTab, setSelectedTab } = useNavContext();
  const [mobileNavBar, toggleMobileNavBar] = useCycle(false, true);

  return (
    <nav className="ml-auto px-8 py-4 lg:hidden">
      <div className="relative z-10">
        <motion.button
          animate={mobileNavBar ? "open" : "closed"}
          onClick={() => toggleMobileNavBar()}
          className="flex flex-col space-y-2"
        >
          {/* HAMBURGER TO X ANIMATION */}
          {/* Each span is a line in the hamburger icon */}
          <motion.span
            variants={{
              closed: {
                rotate: 0,
                y: 0,
              },
              open: { rotate: 45, y: 8 },
            }}
            className="block h-[0.125rem] w-8 rounded-lg bg-slate-400/75"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="block h-[0.125rem] w-8 rounded-lg bg-slate-400/75"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -12 },
            }}
            className="block h-[0.125rem] w-8 rounded-lg bg-slate-400/75"
          />
        </motion.button>
      </div>
    </nav>
  );
}
