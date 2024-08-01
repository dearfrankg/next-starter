import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { normalize, join } from "path";

const prisma = new PrismaClient();

async function exportData() {
  //

  const data = {
    accounts: await prisma.account.findMany(),
    users: await prisma.user.findMany(),
    tests: await prisma.test.findMany(),
    questions: await prisma.question.findMany(),
    choices: await prisma.choice.findMany(),
    testAttempts: await prisma.testAttempt.findMany(),
    generatedTests: await prisma.generatedTest.findMany(),
  };

  fs.writeFileSync(
    join("prisma", "data", "dump.json"),
    JSON.stringify(data, null, 2),
  );

  //
}

exportData()
  .catch((e) => {
    console.log("error: ", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
