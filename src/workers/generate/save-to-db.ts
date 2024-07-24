import prisma from "@/lib/prisma";
import { TestQuestion } from "@/types/questions";
import { Prisma } from "@prisma/client";

interface SaveTestToDBProps {
  testName: string;
  questions: TestQuestion[];
}

export async function saveTestToDB({ testName, questions }: SaveTestToDBProps) {
  try {
    const result = await prisma.$transaction(
      async (tx) => {
        //
        //

        // Create a new test
        const test = await tx.test.create({
          data: { name: testName },
        });

        // Create questions
        for (const q of questions) {
          const question = await tx.question.create({
            data: {
              testId: test.id,
              content: q.question,
              subTopic: q.subTopic ?? "",
              explanation: q.explanation ?? "",
              example: q.example ?? "",
            },
          });

          // Create choices for each question
          await tx.choice.createMany({
            data: Object.entries(q.choices).map(([key, content]) => ({
              questionId: question.id,
              content,
              isCorrect: q.answer.includes(key),
            })),
          });
        }

        //
        //
      },
      {
        timeout: 30000,
        maxWait: 5000,
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
      },
    );

    //
    //
  } catch (e) {
    throw new Error("Error saving to database");
  }
}
