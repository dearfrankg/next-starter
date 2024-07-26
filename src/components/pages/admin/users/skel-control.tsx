export function SkeletonControl() {
  return (
    <div className="flex animate-pulse items-center justify-between gap-8">
      <div className="search h-[36px] flex-auto bg-slate-200"></div>

      <div className="flex flex-1 items-center gap-4">
        <div className="prev h-[30px] w-[57px] bg-slate-200"></div>
        <div className="h-[24px] w-[87px] text-nowrap bg-slate-200"></div>
        <div className="next h-[30px] w-[57px] bg-slate-200"></div>
      </div>
    </div>
  );
}
