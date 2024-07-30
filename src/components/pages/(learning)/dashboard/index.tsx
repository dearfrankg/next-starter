import { DashboardLayout } from "./layout";
import { Chart } from "@/components/generic/chart";
import { TestAttempts } from "@/components/generic/test-attempts";
import { Tests } from "@/components/generic/tests";
import { getTestsWithTestAttempts } from "@/queries/tests/test-with-test-attempts";
import { SearchParamProps } from "@/types";

export async function Dashboard({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps) {
  //

  const props = {
    tests: {
      title: "Tests that you have taken",
      promise: getTestsWithTestAttempts({ userId, searchParams }),
      userId,
      searchParams,
    },
    chart: {
      title: "Chart of test results",
      userId,
      searchParams,
    },
    testAttempts: {
      title: "Latest test results",
      userId,
      searchParams,
    },
  };

  return (
    <DashboardLayout
      {...{
        left: <Tests {...props.tests} />,
        right: <Chart {...props.chart} />,
        bottom: <TestAttempts {...props.testAttempts} />,
      }}
    />
  );

  //
}
