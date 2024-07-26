export function SkeletonUser() {
  return (
    <div className="flex animate-pulse items-center justify-between gap-4">
      <div className="size-8 rounded-full border-2 border-slate-300 bg-slate-200"></div>
      <div className="flex-auto space-y-1">
        <p className="h-[16px] w-[200px] bg-slate-200 text-sm font-medium leading-none"></p>
        <p className="mt-[4px] h-[16px] w-[150px] bg-slate-200 text-sm text-accent-foreground"></p>
      </div>
      <div className="flex flex-col items-end">
        <div className="h-[22px] w-[60px] rounded-md bg-slate-200"></div>
        <div className="mt-1 h-[16px] w-[200px] bg-slate-200"></div>
      </div>
    </div>
  );
}
