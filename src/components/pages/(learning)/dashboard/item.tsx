"use client";

import { createNewSearchParams } from "@/lib/client";
import { cn } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { TestWithCreator } from "@/types/prisma";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoCheck } from "react-icons/go";
import { RiSurveyLine } from "react-icons/ri";

export interface TestProps extends SearchParamProps {
  test: TestWithCreator;
}

export function Test({ test, searchParams }: TestProps) {
  if (!test) {
    return <div>No test found</div>;
  }

  const { id: testId, topic, description } = test;

  const pathname = usePathname();
  const { selectedTest } = searchParams;
  const testSelected = selectedTest == testId;
  const testClass = testSelected ? "bg-accent" : "";

  return (
    <Link
      href={`${pathname}?${createNewSearchParams({
        searchParams,
        name: "selectedTest",
        value: testId,
      })}`}
    >
      <li
        className={cn(
          "rounded-lg border p-2 hover:bg-black/20 dark:hover:bg-white/20",
          testClass,
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="">
            <RiSurveyLine className="size-8" />
          </div>
          <div className="flex-auto space-y-1">
            <p className="text-sm font-medium leading-snug">{topic}</p>
            <p className="text-sm leading-snug text-muted-foreground">
              Creator: {test.creator.name}
            </p>
          </div>
          <div className="">
            {testSelected && <GoCheck className="size-8" />}
          </div>
        </div>
      </li>
    </Link>
  );
}
