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
      >
        {mobileNavItems.map(({ path, label, id }) => {
          return (
            <li
              key={id}
              className="relative list-item border-r-[2px] border-slate-500/15 last:border-0"
            >
              <Link href={path}>
                <motion.button
                  onClick={() => setSelectedTab(path)}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? setSelectedTab(path) : null
                  }
                  onFocus={() => setFocused(path)}
                  onBlur={() => setFocused(null)}
                  onPointerEnter={() => setFocused(path)}
                  tabIndex={0}
                  className={cn(
                    "btn-tab h-[2.5rem] w-[5.5rem] rounded-lg border border-transparent px-8 text-slate-300/70 transition-colors duration-1000 ease-in-out hover:border-[hsla(197,61%,39%,0.65)] hover:border-b-[hsla(197,61%,39%,0.40)] hover:text-gray-200/80",
                    selectedTab === path
                      ? "btn-tab-active cursor-default rounded-lg border-[#00b7ff3b] text-gray-200/80 transition-colors duration-1000 ease-out hover:border-[#00b7ff3b]"
                      : "",
                    !selectedTab && focused
                      ? "btn-tab-focused transition-colors duration-1000 ease-out"
                      : "",
                  )}
                >
                  <span className="list-label">{label}</span>
                  {/* FOLLOW HIGHLIGHT: Animates when the button is focused and follows hover state */}
                  {focused === path && (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.25,
                          ease: "easeOut",
                          type: "spring",
                          bounce: 0,
                          damping: 50,
                          mass: 0.5,
                          stiffness: 500,
                        },
                      }}
                      className={cn(
                        selectedTab === path
                          ? "highlight-tab-selected"
                          : "highlighted-tab bg-gradient-to-b from-30% to-[#00c3ff42] to-100% transition-colors duration-1000 ease-in-out",
                      )}
                      layoutId="highlight"
                    />
                  )}
                  {/* UNDERLINE: Animates/moves along selected path */}
                  {selectedTab === path && (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.25,
                          ease: "easeOut",
                          type: "spring",
                          bounce: 0,
                          damping: 50,
                          mass: 0.5,
                          stiffness: 500,
                        },
                      }}
                      className="selected-tab bg-gradient-to-r from-[#0f2124] via-[#0400ff9a] to-[#0f2124] transition-colors duration-1000 ease-in-out"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
