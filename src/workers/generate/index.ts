import { generateAITest } from "./get-ai-response";
import { saveTestToDB } from "./save-to-db";
import { TestQuestion } from "@/types/questions";

export interface GenerateTestProps {
  topic: string;
  description: string;
  questionCount: number;
}

export async function generateTest(props: GenerateTestProps) {
  try {
    const questions: TestQuestion[] = await generateAITest(props);
    await saveTestToDB({ props, questions });
  } catch (e) {
    console.log("Trouble generating test");
  }
}
