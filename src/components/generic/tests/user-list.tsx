"use client";

import { UserComponent } from "./user";
import { createNewSearchParams } from "@/lib/client";
import { cn } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { TestWithCreator } from "@/types/prisma";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserListProps {
  tests: TestWithCreator[];
}

export default function TestList({
  tests,
  searchParams,
}: SearchParamProps & UserListProps) {
  //

  const pathname = usePathname();
  const { selectedTest } = searchParams;

  const hasNoneFound =
    tests === null || (Array.isArray(tests) && tests.length === 0);
  if (hasNoneFound) {
    return <div>No tests found</div>;
  }

  return (
    <ul className="space-y-2">
      {tests.map((test) => {
        const testSelected = selectedTest == test.id;
        const testClass = testSelected ? "bg-accent" : "";

        return (
          <li
            key={test.id as string}
            className={cn("rounded-lg border p-2 hover:bg-accent", testClass)}
          >
            <Link
              href={`${pathname}?${createNewSearchParams({
                searchParams,
                name: "selectedTest",
                value: test.id,
              })}`}
            >
              <UserComponent {...{ test, searchParams }} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
