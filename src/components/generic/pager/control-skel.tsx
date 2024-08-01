interface SkeletonControlProps {
  filters?: { [key: string]: boolean };
}

export function SkeletonControl({ filters }: SkeletonControlProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex animate-pulse items-center justify-between gap-8">
        <div className="search h-[36px] flex-auto bg-slate-200"></div>

        <div className="flex flex-1 items-center gap-4">
          <div className="prev h-[30px] w-[57px] bg-slate-200"></div>
          <div className="h-[24px] w-[87px] text-nowrap bg-slate-200"></div>
          <div className="next h-[30px] w-[57px] bg-slate-200"></div>
        </div>
      </div>
      <Filters {...{ filters }} />
    </div>
  );
}

interface FiltersProps {
  filters?: { [key: string]: boolean };
}

const Filters = ({ filters }: FiltersProps) => {
  if (!filters?.likeFilter) {
    return null;
  }

  return (
    <div className="flex animate-pulse gap-8">
      <div className="h-[14px] w-[100px] text-nowrap bg-slate-200"></div>
      <div className="h-[14px] w-[100px] text-nowrap bg-slate-200"></div>
    </div>
  );
};
