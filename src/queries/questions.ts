import prisma from "@/lib/prisma";

export async function getTest({ userId }: { userId: string }) {
  return await prisma.test.findMany({
    where: {
      userId,
    },
  });
}
