"use client";

import Search from "./search";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createNewSearchParams } from "@/lib/client";
import { cn } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ControlProps extends SearchParamProps {
  page: number;
  totalPages: number;
  filters?: { [key: string]: boolean };
}

export const Controls = ({
  page,
  totalPages,
  searchParams,
  filters,
}: ControlProps) => {
  const { query, pageSize = "8" } = searchParams;

  return (
    <div className="flex flex-col gap-8">
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

      <Filters {...{ filters, searchParams }} />
    </div>
  );
};

interface FiltersProps extends SearchParamProps {
  filters?: { [key: string]: boolean };
}

const Filters = ({ filters, searchParams }: FiltersProps) => {
  //

  const pathname = usePathname();
  const router = useRouter();

  if (!filters?.likeFilter) {
    return null;
  }

  function setLikedFilter(value: string) {
    const newSearchParams = createNewSearchParams({
      searchParams,
      name: "liked",
      value,
    });

    router.push(`${pathname}?${newSearchParams}`);
  }

  return (
    <RadioGroup defaultValue="all" className="flex gap-8">
      <div
        className="flex items-center space-x-2"
        onClick={() => setLikedFilter("")}
      >
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">Show All</Label>
      </div>
      <div
        className="flex items-center space-x-2"
        onClick={() => setLikedFilter("true")}
      >
        <RadioGroupItem value="liked" id="r2" />
        <Label htmlFor="r2">Show Liked</Label>
      </div>
    </RadioGroup>
  );

  //
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
