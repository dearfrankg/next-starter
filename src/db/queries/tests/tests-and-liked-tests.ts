import prisma from "@/lib/prisma";
import { SearchParamProps } from "@/types";
import { PagedTestsReturnValue } from "@/types/queries";

export async function getTestsWithLiked({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps): Promise<PagedTestsReturnValue> {
  //

  //
  // Extract from search params
  //
  const { query = "", pageSize = "8", liked = "" } = searchParams;

  //
  // reusable where condition
  //
  const whereCondition = {
    topic: {
      contains: query,
      mode: "insensitive" as const,
    },
    ...(liked === "true"
      ? {
          likedBy: {
            some: { userId },
          },
        }
      : {}),
  };

  //
  // Get count
  //
  const count: number = await prisma.test.count({ where: whereCondition });

  //
  // Derive paging vars
  //
  const totalPages: number = Math.ceil(count / Number(pageSize));

  // cap page at total pages
  let page: number = Number(searchParams.page || "1");
  page = page > totalPages ? totalPages : page;

  const skip: number = (page - 1) * Number(pageSize);
  const take: number = Number(pageSize);

  //
  // Get paged records
  //
  const tests = await prisma.test.findMany({
    where: whereCondition,
    include: {
      likedBy: {
        where: { userId },
        select: { id: true },
      },
    },
    orderBy: {
      topic: "asc",
    },
    skip,
    take,
  });

  // so the skeleton cak flash for a second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    tests,
    count,
    page,
    totalPages,
  };

  //
}
