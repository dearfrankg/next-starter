export function TestSkeleton() {
  return (
    <div className="flex animate-pulse items-center justify-between gap-4">
      <div className="size-8 border-2 border-slate-200 bg-slate-200"></div>
      <div className="flex-auto">
        <p className="h-[14px] w-[200px] bg-slate-200 text-sm font-medium leading-snug"></p>
        <p className="h-[14px] w-[150px] bg-slate-200 text-sm leading-snug"></p>
      </div>
    </div>
  );
}
