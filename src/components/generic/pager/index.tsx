import { SkeletonControl } from "./control-skel";
import { Controls } from "./controls";
import ItemList from "./list-items";
import ListSkels from "./list-skels";
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
import { PagedTestsReturnValue } from "@/types/queries";
import React, { Suspense } from "react";

interface TestPagerProps extends SearchParamProps {
  title: string;
  promise: Promise<PagedTestsReturnValue>;
  renderItem: ({ test, searchParams }: any) => React.ReactNode;
  renderSkel: ({ test }: any) => React.ReactNode;
  filters?: { [key: string]: boolean };
}

export const Pager = async ({
  title,
  promise,
  searchParams,
  renderItem,
  renderSkel,
  filters,
}: TestPagerProps) => {
  //

  return (
    <Card className={"mx-auto space-y-10 border-none p-6 shadow-none"}>
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-8">
          <Suspense fallback={<SkeletonControl {...{ filters }} />}>
            <Await promise={promise}>
              {({ page, totalPages }: { page: number; totalPages: number }) => (
                <Controls {...{ filters, page, totalPages, searchParams }} />
              )}
            </Await>
          </Suspense>

          <Suspense fallback={<ListSkels {...{ renderSkel }} />}>
            <Await promise={promise}>
              {({ tests }: { tests: any[] }) => (
                <ItemList
                  {...{
                    tests,
                    searchParams,
                    renderItem,
                  }}
                />
              )}
            </Await>
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
};
