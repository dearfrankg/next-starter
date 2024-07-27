import prisma from "@/lib/prisma";

export async function getTest({ userId }: { userId: string }) {
  return await prisma.test.findMany({
    select: {
      topic: true,
      description: true,
      creator: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}
