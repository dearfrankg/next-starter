"use server";

import { Test, TestProps } from "./item";
import { TestSkeleton } from "./item-skel";
import { DashboardLayout } from "./layout";
import { Chart } from "@/components/generic/chart";
import { Pager } from "@/components/generic/pager";
import { TestAttempts } from "@/components/generic/test-attempts";
import { getTestsWithTestAttempts } from "@/db/queries/tests/test-with-test-attempts";
import { SearchParamProps } from "@/types";

interface DashboardProps extends SearchParamProps {
  userId: string;
}

export async function Dashboard({ userId, searchParams }: DashboardProps) {
  //

  const props = {
    tests: {
      title: "Select a test to see your results",
      promise: getTestsWithTestAttempts({ userId, searchParams }),
      searchParams,
      renderItem: ({ test, searchParams }: TestProps) => (
        <Test {...{ test, searchParams }} />
      ),
      renderSkel: () => <TestSkeleton />,
    },
    chart: {
      title: "Chart of test result percentages",
      userId,
      searchParams,
    },
    testAttempts: {
      title: "Last 5 test results",
      userId,
      searchParams,
    },
  };

  return (
    <DashboardLayout
      {...{
        left: <Pager {...props.tests} />,
        right: <Chart {...props.chart} />,
        bottom: <TestAttempts {...props.testAttempts} />,
      }}
    />
  );

  //
}
