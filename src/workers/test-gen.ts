import { generateTest } from "./generate";

async function main() {
  try {
    await generateTest({
      topic: "Beginner AI",
      description: "Test on the basics of AI",
      questionCount: 80,
    });
  } catch (error) {
    console.error("Error test-gen.ts:", error);
  }
}

main();
