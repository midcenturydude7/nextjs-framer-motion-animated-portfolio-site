export default function Home() {
  return (
    <div className="flex w-full justify-center px-6 sm:px-10 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="grid min-h-[800px] w-full grid-cols-1 grid-rows-4 gap-8 md:max-w-[90%] lg:max-w-[55%]">
        <div className="border border-slate-300/20">1</div>
        <div className="border border-slate-300/20">2</div>
        <div className="border border-slate-300/20">3</div>
        <div className="border border-slate-300/20">4</div>
      </div>
    </div>
  );
}
