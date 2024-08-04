"use client";

import { createNewSearchParams } from "@/lib/client";
import { cn } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps extends SearchParamProps {
  testId: string;
  children: React.ReactNode;
}

export function Item({ testId, searchParams, children }: ItemProps) {
  const pathname = usePathname();
  const { selectedTest } = searchParams;
  const testSelected = selectedTest == testId;
  const testClass = testSelected ? "bg-accent" : "";

  return <>{children}</>;
  // <li className={cn("rounded-lg border p-2 hover:bg-accent", testClass)}>
  {
    /* <Link
        href={`${pathname}?${createNewSearchParams({
          searchParams,
          name: "selectedTest",
          value: testId,
        })}`}
      > */
  }

  {
    /* </Link> */
  }
  // </li>
}
