"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  // useEffect to handle screen size changes — animated layout on resize via Framer Motion | Note: this is optional
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
      <div className="grid h-full w-full grid-rows-4 gap-8 [grid-template-areas:'hero-main'_'tab-1'_'tab-2'_'tab-3'] md:w-[95%] md:grid-cols-[1fr_1fr] md:grid-rows-[2fr_1fr_1fr_1fr_2fr] md:[grid-template-areas:'._hero-main'_'tab-1_hero-main'_'tab-2_hero-main'_'tab-3_hero-main'_'._hero-main'] lg:max-w-[75%]">
        <div className="grid h-full w-full place-content-center rounded-none border border-slate-300/20 bg-slate-50/5 [grid-area:tab-1] md:relative md:z-10 md:h-[15vh] md:translate-x-40 md:rounded-lg">
          1
        </div>
        <div className="grid h-full w-full place-content-center rounded-none border border-slate-300/20 bg-slate-50/5 [grid-area:tab-2] md:relative md:z-10 md:h-[15vh] md:translate-x-40 md:rounded-lg">
          2
        </div>
        // cell #3 - tab 3 content
        <div className="grid h-full w-full place-content-center rounded-none border border-slate-300/20 bg-slate-50/5 [grid-area:tab-3] md:relative md:z-10 md:h-[15vh] md:translate-x-40 md:rounded-lg">
          3
        </div>
        // cell #4 - main hero section
        <div className="grid h-full w-full place-content-center rounded-none border border-slate-300/20 bg-slate-50/5 [grid-area:hero-main] md:row-[1_/_6] md:min-w-[40vw] md:rounded-lg">
          4
        </div>
      </div>
    </div>
  );
}
