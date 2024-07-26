import { generateTest } from "./generate";

async function main() {
  try {
    await generateTest({
      topic: "react and typescript",
      description: "A simple test about react and typescript",
      questionCount: 80,
    });
  } catch (error) {
    console.error("Error test-gen.ts:", error);
  }
}

main();
