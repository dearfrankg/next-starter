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
import { SearchParamProps } from "@/types";
import { TestWithCreator } from "@/types/prisma";
import { PagedTestsReturnValue } from "@/types/queries";
import React, { Suspense } from "react";

interface TestPagerProps {
  title: string;
  promise: Promise<PagedTestsReturnValue>;
  userId: string;
}

export const Tests = async ({
  title,
  promise,
  userId,
  searchParams,
}: TestPagerProps & SearchParamProps) => {
  return (
    <Card
      className={"mx-auto h-[628px] space-y-10 border-none p-6 shadow-none"}
    >
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
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
