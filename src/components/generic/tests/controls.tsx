"use client";

import Search from "./search";
import { createNewSearchParams } from "@/lib/client";
import { cn } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ControlProps {
  page: number;
  totalPages: number;
}

export const Controls = ({
  page,
  totalPages,
  searchParams,
}: SearchParamProps & ControlProps) => {
  const { query, pageSize = "8" } = searchParams;

  return (
    <div className="flex items-center justify-between gap-8">
      <Search {...{ searchParams }} />

      <div className="flex flex-1 items-center gap-4">
        <Prev {...{ page, searchParams }} />
        <div className="text-nowrap">
          Page {page} of {totalPages}
        </div>
        <Next {...{ page, totalPages, searchParams }} />
      </div>
    </div>
  );
};

const Prev = ({ page, searchParams }: { page: number } & SearchParamProps) => {
  const pathname = usePathname();

  const newSearchParams = createNewSearchParams({
    searchParams,
    name: "page",
    value: String(page > 1 ? page - 1 : 1),
  });

  return (
    <Link
      href={`${pathname}?${newSearchParams}`}
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
  page,
  totalPages,
  searchParams,
}: { page: number; totalPages: number } & SearchParamProps) => {
  const pathname = usePathname();

  const newSearchParams = createNewSearchParams({
    searchParams,
    name: "page",
    value: String(page < totalPages ? page + 1 : page),
  });

  return (
    <Link
      href={`${pathname}?${newSearchParams}`}
      className={cn(
        "rounded border bg-primary px-3 py-1 text-sm text-background",
        page === totalPages && "pointer-events-none opacity-50",
      )}
    >
      Next
    </Link>
  );
};
