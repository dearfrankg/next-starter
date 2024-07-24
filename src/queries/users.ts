import prisma from "@/lib/prisma";
import { ParamProps, SearchParamProps } from "@/types";

/*
    getPagedUsers
*/

export async function getPagedUsers({ searchParams }: SearchParamProps) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page || "1");
  const pageSize = Number(searchParams?.pageSize || "8");
  const skip = (page - 1) * pageSize;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const [users, count] = await prisma.$transaction([
    prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        name: "asc",
      },
      skip: skip,
      take: pageSize,
    }),
    prisma.user.count({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
    }),
  ]);

  return {
    users,
    count,
    currentPage: page,
    totalPages: Math.ceil(count / pageSize),
  };
}

/*
    getUser
*/
export async function getUser({ params }: ParamProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return prisma.user.findFirst({
    where: {
      id: params.userId,
    },
  });
}
