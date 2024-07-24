import json from "../../../test-success.json";
import { generateAITest } from "./get-ai-response";
import { saveTestToDB } from "./save-to-db";
import { TestQuestion } from "@/types/questions";

export interface GenerateTestProps {
  topic: string;
  questionCount: number;
}

export async function generateTest(props: GenerateTestProps) {
  try {
    const questions: TestQuestion[] = await generateAITest(props);
    await saveTestToDB({ testName: props.topic, questions });
  } catch (e) {
    console.log("Trouble generating test");
  }
}
