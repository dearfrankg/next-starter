import { Test, TestProps } from "./item";
import { TestSkeleton } from "./item-skel";
import { StudyLayout } from "./layout";
import { Pager } from "@/components/generic/pager";
import { getGeneratedTests } from "@/queries/tests/generated-tests";
import { SearchParamProps } from "@/types";

interface StudyProps extends SearchParamProps {
  userId: string;
}

export async function Study({ userId, searchParams }: StudyProps) {
  //

  const props = {
    tests: {
      title: "Test Selector",
      promise: getGeneratedTests({ userId, searchParams }),
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
