import Await from "../await";
import { Controls } from "./controls";
import { SkeletonControl } from "./skel-control";
import { SkeletonUser } from "./skel-user";
import SkeletonUserList from "./skel-user-list";
import UserList from "./user-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPagedUsers } from "@/queries/users";
import { SearchParamProps } from "@/types";
import { User } from "@prisma/client";
import React, { Suspense } from "react";

export const Users = async ({ searchParams }: SearchParamProps) => {
  const promise = getPagedUsers({ searchParams });

  return (
    <Card className={"mx-auto w-[600px] space-y-10 p-8"}>
      <CardHeader className="p-0">
        <Suspense fallback={<SkeletonControl />}>
          <Await promise={promise}>
            {({ totalPages }: { totalPages: number }) => (
              <Controls {...{ totalPages, searchParams }} />
            )}
          </Await>
        </Suspense>
      </CardHeader>
      <CardContent className="p-0">
        <Suspense fallback={<SkeletonUserList />}>
          <Await promise={promise}>
            {({ users }: { users: User[] }) => <UserList {...{ users }} />}
          </Await>
        </Suspense>
      </CardContent>
    </Card>
  );
};
