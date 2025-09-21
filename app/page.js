"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div className="flex h-[80vh] w-full justify-center px-2 sm:px-6 md:h-[60vh] md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <motion.div
        className={`grid h-full w-full gap-8 ${
          isMobile
            ? "grid-rows-4 [grid-template-areas:'hero-main'_'tab-1'_'tab-2'_'tab-3']"
            : "w-[95%] grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr_1fr_2fr] [grid-template-areas:'._hero-main'_'tab-1_hero-main'_'tab-2_hero-main'_'tab-3_hero-main'_'._hero-main'] lg:max-w-[75%]"
        }`}
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className={`grid h-full w-full place-content-center border border-slate-300/20 bg-slate-50/5 [grid-area:tab-1] ${!isMobile ? "relative z-10 h-[10vh] rounded-lg" : "rounded-none"}`}
          animate={{
            x: !isMobile ? 112 : 0, // 7rem = 112px
            borderRadius: !isMobile ? 8 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          1
        </motion.div>
        <motion.div
          className={`grid h-full w-full place-content-center border border-slate-300/20 bg-slate-50/5 [grid-area:tab-2] ${!isMobile ? "relative z-10 h-[10vh] rounded-lg" : "rounded-none"}`}
          animate={{
            x: !isMobile ? 112 : 0,
            borderRadius: !isMobile ? 8 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        >
          2
        </motion.div>
        <motion.div
          className={`grid h-full w-full place-content-center border border-slate-300/20 bg-slate-50/5 [grid-area:tab-3] ${!isMobile ? "relative z-10 h-[10vh] rounded-lg" : "rounded-none"}`}
          animate={{
            x: !isMobile ? 112 : 0,
            borderRadius: !isMobile ? 8 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        >
          3
        </motion.div>
        <motion.div
          className={`grid h-full w-full place-content-center border border-slate-300/20 bg-slate-50/5 [grid-area:hero-main] ${!isMobile ? "rounded-lg" : "rounded-none"}`}
          style={{
            gridRow: !isMobile ? "1 / 6" : "auto",
          }}
          animate={{
            borderRadius: !isMobile ? 8 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          4
        </motion.div>
      </motion.div>
    </div>
  );
}
