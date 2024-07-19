import Await from "@/components/await";
import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { RequiresAdmin } from "@/components/requires-admin";
import SubMenu from "@/components/submenu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SkeletonUser } from "@/components/users/skel-user";
import { UserComponent } from "@/components/users/user";
import { getUser } from "@/queries/users";
import { ParamProps } from "@/types";
import { User } from "@prisma/client";
import React, { Suspense } from "react";

export default async function UserPage({ params }: ParamProps) {
  const promise: Promise<any> = getUser({ params });

  return (
    <PageWithNav>
      <SubMenu title="Admin" />

      <H2>User</H2>

      <RequiresAdmin>
        <Card className={"mx-auto w-[600px]"}>
          <CardContent className="p-4">
            <Suspense fallback={<SkeletonUser />}>
              <Await promise={promise}>
                {(user: User) => (
                  <UserComponent {...{ user, memberSince: true }} />
                )}
              </Await>
            </Suspense>
          </CardContent>
        </Card>
      </RequiresAdmin>
    </PageWithNav>
  );
}
