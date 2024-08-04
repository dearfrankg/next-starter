import prisma from "@/lib/prisma";
import { SearchParamProps } from "@/types";
import { PagedTestsReturnValue } from "@/types/queries";

export async function getTestsWithTestAttempts({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps): Promise<PagedTestsReturnValue> {
  //

  async function getCount({
    userId,
    query,
  }: {
    userId: string;
    query: string;
  }) {
    return prisma.test.count({
      where: {
        AND: [
          { topic: { contains: query, mode: "insensitive" } },
          {
            testAttempts: {
              some: { userId },
            },
          },
        ],
      },
    });
  }

  async function getRecords({
    userId,
    query,
    skip,
    take,
  }: {
    userId: string;
    query: string;
    skip: number;
    take: number;
  }) {
    return prisma.test.findMany({
      where: {
        AND: [
          { topic: { contains: query, mode: "insensitive" } },
          {
            testAttempts: {
              some: { userId },
            },
          },
        ],
      },
      select: {
        id: true,
        topic: true,
        description: true,
        creator: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        topic: "asc",
      },
      skip,
      take,
    });
  }

  const { query = "", pageSize = "8" } = searchParams;
  const count: number = await getCount({ userId, query });

  const totalPages: number = Math.ceil(count / Number(pageSize));

  // cap page at total pages
  let page: number = Number(searchParams.page || "1");
  page = page > totalPages ? totalPages : page;

  const skip: number = (page - 1) * Number(pageSize);
  const take: number = Number(pageSize);
  const tests = count ? await getRecords({ userId, query, skip, take }) : [];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    tests,
    count,
    page,
    totalPages,
  };

  //
}
