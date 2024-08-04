import ChartComponent from "./chart";
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
import { TestAttemptTableItem } from "@/types/prisma";
import React, { Suspense } from "react";

interface ChartProps {
  title: string;
  userId: string;
}
export const Chart = async ({
  title,
  userId,
  searchParams,
}: ChartProps & SearchParamProps) => {
  //

  const promise: Promise<TestAttemptTableItem[]> = getLastestTestAttempts({
    userId,
    searchParams,
  });

  return (
    <Card
      className={"mx-auto h-[628px] space-y-10 border-none p-6 shadow-none"}
    >
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-8">
          <Suspense fallback={"Loading..."}>
            <Await promise={promise}>
              {(items: any[]) => (
                <ChartComponent {...{ items, searchParams }} />
              )}
            </Await>
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
};
