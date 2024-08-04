import prisma from "@/lib/prisma";
import { SearchParamProps } from "@/types";
import { PagedTestsReturnValue } from "@/types/queries";

export async function getGeneratedTests({
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
    return prisma.generatedTest.count({
      where: {
        AND: [
          { topic: { contains: query, mode: "insensitive" } }, //
          { userId },
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
    return prisma.generatedTest.findMany({
      where: {
        AND: [
          { topic: { contains: query, mode: "insensitive" } }, //
          { userId },
        ],
      },
      select: {
        id: true,
        topic: true,
        description: true,
        startedAt: true,
        finishedAt: true,
      },
      orderBy: {
        startedAt: "desc",
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
