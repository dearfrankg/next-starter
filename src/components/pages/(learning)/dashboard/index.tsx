import { DashboardLayout } from "./layout";
import { Chart } from "@/components/generic/chart";
import { TestAttempts } from "@/components/generic/test-attempts";
import { Tests } from "@/components/generic/tests";
import { SearchParamProps } from "@/types";

export async function Dashboard({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps) {
  return (
    <DashboardLayout
      {...{
        left: <Tests {...{ userId, searchParams }} />,
        right: <Chart {...{ userId, searchParams }} />,
        bottom: <TestAttempts {...{ userId, searchParams }} />,
      }}
    />
  );
}
