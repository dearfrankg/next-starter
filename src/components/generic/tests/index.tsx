import { Controls } from "./controls";
import { SkeletonControl } from "./skel-control";
import SkeletonUserList from "./skel-user-list";
import TestList from "./user-list";
import { Await } from "@/components/await";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPagedTests } from "@/queries/tests";
import { SearchParamProps } from "@/types";
import { TestWithCreator } from "@/types/prisma";
import React, { Suspense } from "react";

export const Tests = async ({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps) => {
  const promise = getPagedTests({ userId, searchParams });

  return (
    <Card
      className={"mx-auto h-[628px] space-y-10 border-none p-6 shadow-none"}
    >
      <CardHeader className="p-0">
        <CardTitle>Tests where you have test results</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-8">
          <Suspense fallback={<SkeletonControl />}>
            <Await promise={promise}>
              {({ page, totalPages }: { page: number; totalPages: number }) => (
                <Controls {...{ page, totalPages, searchParams }} />
              )}
            </Await>
          </Suspense>

          <Suspense fallback={<SkeletonUserList />}>
            <Await promise={promise}>
              {({ tests }: { tests: TestWithCreator[] }) => (
                <TestList {...{ tests, searchParams }} />
              )}
            </Await>
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
};
