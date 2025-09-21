export default function Home() {
  return (
    <div className="flex h-[80vh] w-full justify-center px-2 sm:px-6 md:h-[60vh] md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="grid h-full w-full grid-rows-4 gap-8 [grid-template-areas:'hero-main'_'tab-1'_'tab-2'_'tab-3'] md:w-[95%] md:grid-cols-[repeat(2,_1fr)] md:grid-rows-[repeat(3,_1fr)] md:[grid-template-areas:'tab-1_hero-main'_'tab-2_hero-main'_'tab-3_hero-main'] lg:max-w-[75%]">
        <div className="grid h-full w-full place-content-center border border-slate-300/20 [grid-area:tab-1]">
          1
        </div>
        <div className="grid h-full w-full place-content-center border border-slate-300/20 [grid-area:tab-2]">
          2
        </div>
        <div className="grid h-full w-full place-content-center border border-slate-300/20 [grid-area:tab-3]">
          3
        </div>
        <div className="grid h-full w-full place-content-center border border-slate-300/20 [grid-area:hero-main]">
          4
        </div>
      </div>
    </div>
  );
}
