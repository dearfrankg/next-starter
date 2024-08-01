import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function importData() {
  // read dump file
  const jsonData = readDumpFile();

  // clear database tables
  await deleteTables();

  // import into database tables
  await importIntoTables(jsonData);
}

importData()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

function readDumpFile() {
  const filePath = path.join(__dirname, "..", "data", "dump.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return jsonData;
}

async function deleteTables() {
  // Delete all existing data
  // Note: Order matters here due to foreign key constraints
  await prisma.generatedTest.deleteMany();
  await prisma.testAttempt.deleteMany();
  await prisma.choice.deleteMany();
  await prisma.question.deleteMany();
  await prisma.test.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();
  console.log("Existing data deleted");
}

async function importIntoTables(jsonData) {
  //

  // Import users
  if (jsonData.users && Array.isArray(jsonData.users)) {
    await prisma.user.createMany({
      data: jsonData.users,
    });
    console.log(`Imported ${jsonData.users.length} users`);
  } else {
    console.log("No users data found or invalid format");
  }

  // Import accounts
  if (jsonData.accounts && Array.isArray(jsonData.accounts)) {
    await prisma.account.createMany({
      data: jsonData.accounts,
    });
    console.log(`Imported ${jsonData.accounts.length} accounts`);
  } else {
    console.log("No accounts data found or invalid format");
  }

  // Import tests
  if (jsonData.tests && Array.isArray(jsonData.tests)) {
    await prisma.test.createMany({
      data: jsonData.tests,
    });
    console.log(`Imported ${jsonData.tests.length} tests`);
  } else {
    console.log("No tests data found or invalid format");
  }

  // Import questions
  if (jsonData.questions && Array.isArray(jsonData.questions)) {
    await prisma.question.createMany({
      data: jsonData.questions,
    });
    console.log(`Imported ${jsonData.questions.length} questions`);
  } else {
    console.log("No questions data found or invalid format");
  }

  // Import choices
  if (jsonData.choices && Array.isArray(jsonData.choices)) {
    await prisma.choice.createMany({
      data: jsonData.choices,
    });
    console.log(`Imported ${jsonData.choices.length} choices`);
  } else {
    console.log("No choices data found or invalid format");
  }

  // Import testAttempts
  if (jsonData.testAttempts && Array.isArray(jsonData.testAttempts)) {
    await prisma.testAttempt.createMany({
      data: jsonData.testAttempts,
    });
    console.log(`Imported ${jsonData.testAttempts.length} testAttempts`);
  } else {
    console.log("No testAttempts data found or invalid format");
  }

  // Import testAttempts
  if (jsonData.generatedTests && Array.isArray(jsonData.generatedTests)) {
    await prisma.generatedTest.createMany({
      data: jsonData.generatedTests,
    });
    console.log(`Imported ${jsonData.generatedTests.length} generatedTests`);
  } else {
    console.log("No generatedTests data found or invalid format");
  }

  console.log("Data import completed successfully");
}
