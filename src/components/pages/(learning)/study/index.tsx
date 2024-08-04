import { Test, TestProps } from "./item";
import { TestSkeleton } from "./item-skel";
import { StudyLayout } from "./layout";
import { Pager } from "@/components/generic/pager";
import { getGeneratedTests } from "@/db/queries/tests/generated-tests";
import { getTestsWithLiked } from "@/db/queries/tests/tests-and-liked-tests";
import { jsonString } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { LikedTests } from "@/types/prisma";

interface StudyProps extends SearchParamProps {
  userId: string;
}

export async function Study({ userId, searchParams }: StudyProps) {
  //

  const props = {
    tests: {
      title: "Test Selector",
      promise: getTestsWithLiked({ userId, searchParams }),
      searchParams,
      renderItem: ({ test, searchParams }: TestProps) => (
        <Test {...{ test, searchParams }} />
      ),
      renderSkel: () => <TestSkeleton />,
      filters: {
        likeFilter: true,
      },
    },
  };

  return (
    <StudyLayout
      {...{
        center: <Pager {...props.tests} />,
      }}
    />
  );

  //
}
