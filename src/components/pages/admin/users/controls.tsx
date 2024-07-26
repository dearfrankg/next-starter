import Search from "./search";
import { cn } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Link from "next/link";

interface ControlProps {
  totalPages: number;
}

export const Controls = ({
  totalPages,
  searchParams,
}: SearchParamProps & ControlProps) => {
  const { query, page = "1", pageSize = "8" } = searchParams;

  return (
    <div className="flex items-center justify-between gap-8">
      <Search {...{ query }} />

      <div className="flex flex-1 items-center gap-4">
        <Prev {...{ searchParams }} />
        <div className="text-nowrap">
          Page {page} of {totalPages}
        </div>
        <Next {...{ searchParams, totalPages }} />
      </div>
    </div>
  );
};

const Prev = ({ searchParams }: SearchParamProps) => {
  const { query, page = "1", pageSize = "8" } = searchParams;

  return (
    <Link
      href={{
        pathname: "/admin/users",
        query: {
          ...(query ? { query } : {}),
          ...(pageSize ? { pageSize } : {}),
          page: Number(page) > 1 ? Number(page) - 1 : 1,
        },
      }}
      className={cn(
        "rounded border bg-primary px-3 py-1 text-sm text-background",
        Number(page) <= 1 && "pointer-events-none opacity-50",
      )}
    >
      Prev
    </Link>
  );
};

const Next = ({
  searchParams,
  totalPages,
}: { totalPages: number } & SearchParamProps) => {
  const { query, page = "1", pageSize = "8" } = searchParams;

  return (
    <Link
      href={{
        pathname: "/admin/users",
        query: {
          ...(query ? { query } : {}),
          ...(pageSize ? { pageSize } : {}),
          page: Number(page) + 1,
        },
      }}
      className={cn(
        "rounded border bg-primary px-3 py-1 text-sm text-background",
        Number(page) === totalPages && "pointer-events-none opacity-50",
      )}
    >
      Next
    </Link>
  );
};
