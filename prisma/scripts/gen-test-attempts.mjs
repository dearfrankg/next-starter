import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function generateTestAttempts() {
  // read dump file
  let jsonData;

  jsonData = readDumpFile();

  // bind jsonData
  const generateTestAttempt = genTestAttempt.bind(null, jsonData);

  jsonData.testAttempts = [
    generateTestAttempt({ answersCount: 70, incorrectCount: 20, daysAgo: 90 }),
    generateTestAttempt({ answersCount: 80, incorrectCount: 20, daysAgo: 80 }),
    generateTestAttempt({ answersCount: 80, incorrectCount: 10, daysAgo: 70 }),
    generateTestAttempt({ answersCount: 80, incorrectCount: 12, daysAgo: 50 }),
    generateTestAttempt({ answersCount: 80, incorrectCount: 5, daysAgo: 30 }),
  ];

  // import into database tables
  await importIntoTables(jsonData);
}

generateTestAttempts()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

function readDumpFile() {
  const filePath = path.join(__dirname, "..", "data", "dump.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return jsonData;
}

function genTestAttempt(jsonData, { answersCount, incorrectCount, daysAgo }) {
  //

  const { answersArray, incorrectAnswersArray } = getAttemptArrays({
    jsonData,
    answersCount,
    incorrectCount,
  });

  const totalCount = jsonData.questions.length;
  const correctCount = answersCount - incorrectCount;
  const testAttempt = {
    userId: jsonData.users[0].id,
    testId: jsonData.tests[0].id,
    startedAt: getDate({ daysAgo, militaryTime: "13:00" }),
    finishedAt: getDate({ daysAgo, militaryTime: "13:30" }),
    totalCount,
    answersCount,
    unansweredCount: jsonData.questions.length - answersCount,
    correctCount,
    incorrectCount,
    percentage: (correctCount / totalCount) * 100,
    answers: { answers: answersArray },
    incorrectAnswers: { incorrectAnswers: incorrectAnswersArray },
  };

  return testAttempt;

  //
}

function getDate({ daysAgo = 0, militaryTime = "00:00" }) {
  const now = new Date();
  const [hours, minutes] = militaryTime.split(":").map(Number);

  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - daysAgo,
    hours,
    minutes,
  );

  return targetDate;
}

function getAttemptArrays({ jsonData, answersCount, incorrectCount }) {
  //

  // create answersArray
  const answersArray = jsonData.questions.map((q) => {
    const [correctChoice] = jsonData.choices.filter(
      (c) => c.questionId === q.id && c.isCorrect,
    );
    return {
      questionId: q.id,
      userChoiceId: correctChoice.id,
    };
  });
  // delete questions if necessary
  const nuke = answersArray.length - answersCount;
  for (let count = 1; count <= nuke; count++) {
    const randomIndex = Math.floor(Math.random() * answersArray.length);
    answersArray.splice(randomIndex, 1);
  }
  // select random indices from answersArray
  const incorrectIndices = new Set();
  while (incorrectIndices.size < incorrectCount) {
    incorrectIndices.add(Math.floor(Math.random() * answersArray.length));
  }
  // update answersArray and generate incorrectAnswersArray
  const incorrectAnswersArray = Array.from(incorrectIndices).map((i) => {
    const wrongChoices = jsonData.choices.filter(
      (c) => c.questionId === answersArray[i].questionId && !c.isCorrect,
    );
    // make the question in the answersArray incorrect
    const correctChoice = answersArray[i].userChoiceId;
    answersArray[i].userChoiceId =
      wrongChoices[Math.floor(Math.random() * 3)].id;
    // make incorrectAnswersEntry
    return {
      questionId: answersArray[i].questionId,
      userChoiceId: answersArray[i].userChoiceId,
      correctChoiceId: correctChoice,
    };
  });

  return { answersArray, incorrectAnswersArray };
  //
}

async function importIntoTables(jsonData) {
  //

  // Import testAttempts
  if (jsonData.testAttempts && Array.isArray(jsonData.testAttempts)) {
    await prisma.testAttempt.createMany({
      data: jsonData.testAttempts,
    });
    console.log(`Imported ${jsonData.testAttempts.length} testAttempts`);
  } else {
    console.log("No testAttempts data found or invalid format");
  }

  //
}
