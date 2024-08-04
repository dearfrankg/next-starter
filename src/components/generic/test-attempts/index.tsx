import SkeletonUserList from "./skel-user-list";
import TestAttemptList from "./user-list";
import { Await } from "@/components/await";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLastestTestAttempts } from "@/db/queries/test-attempts";
import { SearchParamProps } from "@/types";
import React, { Suspense } from "react";

interface TestAttemptsProps {
  title: string;
  userId: string;
}

export const TestAttempts = async ({
  title,
  userId,
  searchParams,
}: TestAttemptsProps & SearchParamProps) => {
  //

  const promise = getLastestTestAttempts({ userId, searchParams });

  return (
    <Card className={"mx-auto space-y-10 border-none p-6 shadow-none"}>
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-8">
          <Suspense fallback={<SkeletonUserList />}>
            <Await promise={promise}>
              {(items: any[]) => <TestAttemptList {...{ items }} />}
            </Await>
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
};
