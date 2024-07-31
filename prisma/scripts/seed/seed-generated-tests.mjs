import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function importData() {
  //

  await deleteGeneratedTests();

  await importGeneratedTests();

  //
}

importData()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

async function deleteGeneratedTests() {
  //

  await prisma.generatedTest.deleteMany();

  //
}

async function importGeneratedTests() {
  //

  const jsonData = {
    generatedTests: getData(),
  };

  if (jsonData.generatedTests && Array.isArray(jsonData.generatedTests)) {
    await prisma.generatedTest.createMany({
      data: jsonData.generatedTests,
    });
    console.log(`Imported ${jsonData.generatedTests.length} generatedTests`);
  } else {
    console.log("No generatedTests data found or invalid format");
  }

  //
}

function getData() {
  //

  const generatedTests = [
    {
      topic: "Knots",
      description: "Know knot names and what they are for",
      progress: "0",
      status: "incomplete",
      userId: "clz1umgy60000nfcpx8b3a4rp",
      startedAt: "2024-07-25T22:32:25.111Z",
      finishedAt: "2024-07-25T22:33:54.025Z",
    },
    {
      topic: "Statistics",
      description: "Statistics for beginners",
      progress: "0",
      status: "incomplete",
      userId: "clz1umgy60000nfcpx8b3a4rp",
      startedAt: "2024-07-26T22:32:25.111Z",
      finishedAt: "2024-07-26T22:33:54.025Z",
    },
    {
      topic: "Algebra",
      description: "Algebra for beginners",
      progress: "0",
      status: "incomplete",
      userId: "clz1umgy60000nfcpx8b3a4rp",
      startedAt: "2024-07-27T22:32:25.111Z",
      finishedAt: "2024-07-27T22:33:54.025Z",
    },
  ];

  return generatedTests;

  //
}
