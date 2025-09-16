export default function Home() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center px-2 sm:px-6 md:h-[60vh] md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="mx-auto grid h-full w-full grid-rows-4 gap-8 md:w-[90%] md:grid-cols-[3fr_5fr] md:grid-rows-3 lg:max-w-[80%]">
        <div className="h-full w-full place-content-center border border-slate-300/20">
          1
        </div>
        <div className="h-full w-full place-content-center border border-slate-300/20">
          2
        </div>
        <div className="h-full w-full place-content-center border border-slate-300/20">
          3
        </div>
        <div className="h-full w-full place-content-center border border-slate-300/20">
          4
        </div>
      </div>
    </div>
  );
}
