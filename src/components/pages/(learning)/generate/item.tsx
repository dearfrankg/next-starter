"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { createNewSearchParams } from "@/lib/client";
import { cn, timeAgo } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { GeneratedTest } from "@/types/prisma";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoCheck } from "react-icons/go";
import { RiSurveyLine } from "react-icons/ri";

export interface TestProps extends SearchParamProps {
  test: GeneratedTest;
}

export function Test({ test, searchParams }: TestProps) {
  if (!test) {
    return <div>No test found</div>;
  }

  const { id: testId, topic, startedAt } = test;

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
              Started: {timeAgo(startedAt.toString())}
            </p>
          </div>
          {topic !== "Algebra" && (
            <Badge className="rounded-full">Complete</Badge>
          )}
          {topic === "Algebra" && (
            <div className="flex w-[80px] flex-col items-center">
              <p className="text-sm">80%</p>
              <Progress value={80} className="w-full" />
            </div>
          )}
        </div>
      </li>
    </Link>
  );
}
