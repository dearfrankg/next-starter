import prisma from "@/lib/prisma";
import { SearchParamProps } from "@/types";
import { TestAttemptTableItem } from "@/types/prisma";

export async function getLastestTestAttempts({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps) {
  //

  const { selectedTest: testId } = searchParams;

  if (!userId || !testId) {
    return [];
  }

  return prisma.testAttempt.findMany({
    where: {
      userId,
      testId,
    },
    orderBy: {
      startedAt: "desc",
    },
    take: 5,
    select: {
      id: true,
      startedAt: true,
      totalCount: true,
      correctCount: true,
      percentage: true,
      user: {
        select: {
          id: true,
          name: true,
        },
      },
      test: {
        select: {
          id: true,
          topic: true,
        },
      },
    },
  });

  //
}
