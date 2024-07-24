import prisma from "@/lib/prisma";

export async function getTest(topic: string) {
  const dbResponse = await prisma.test.findMany({
    where: {
      name: topic,
    },
    select: {
      name: true,
      questions: {
        select: {
          question: true,
          choices: {
            select: { text: true },
          },
          answer: {
            select: { text: true },
          },
        },
      },
    },
  });
}
