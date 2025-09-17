export default function Home() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center px-2 sm:px-6 md:h-[60vh] md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="grid h-full w-full grid-rows-4 gap-8 md:w-[95%] md:grid-cols-[repeat(2,_1fr)] md:grid-rows-[3,_1fr] lg:max-w-[80%]">
        <div className="grid h-[300px] w-full place-content-center border border-yellow-300/80">
          1
        </div>
        <div className="grid h-full w-full place-content-center border border-slate-300/20">
          2
        </div>
        <div className="grid h-full w-full place-content-center border border-slate-300/20">
          3
        </div>
        <div className="grid h-full w-full place-content-center border border-slate-300/20 md:col-[2] md:row-[1_/_4]">
          4
        </div>
      </div>
    </div>
  );
}
