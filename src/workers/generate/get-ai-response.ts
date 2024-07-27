import { GenerateTestProps } from ".";
import { writeVariableToFile } from "../../lib/file";
import { getPrompt } from "./get-prompt";
import { jsonString, printError } from "@/lib/utils";
import { TestQuestion } from "@/types/questions";
import cuid from "cuid";
import OpenAI from "openai";
import { join, dirname, basename, extname, normalize } from "path";
import { z } from "zod";

const { OPENAI_API_KEY } = process.env;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export async function generateAITest(props: GenerateTestProps) {
  const textResponse = await getAIResponse(props);
  const parsedResponse = await getParsedResponse(props, textResponse);
  const validatedResponse = await getSchemaResponse(parsedResponse);
  const cleanedObject = cleanup({ validatedResponse, props });

  return cleanedObject;
}

async function getAIResponse(props: GenerateTestProps): Promise<string> {
  let textResponse;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: getPrompt(props) },
      ],
      model: "gpt-4o-mini-2024-07-18",
      max_tokens: 16000,
      response_format: { type: "json_object" },
    });

    textResponse = completion.choices[0].message.content || "";

    if (textResponse.length === 0) {
      throw new Error("AI system has no response");
    }
  } catch (e: unknown) {
    printError(e);
  }

  return textResponse || "";
}

async function getParsedResponse(
  props: GenerateTestProps,
  textResponse: string,
) {
  let questions;

  try {
    const parseResponse = await JSON.parse(textResponse);

    const filePath = join(normalize("prisma/data"), `test-${cuid()}.json`);

    writeVariableToFile(
      filePath,
      jsonString({
        topic: props.topic,
        description: props.description,
        ...parseResponse,
      }),
    );

    questions = parseResponse.questions;
  } catch (e) {
    questions = [];
    throw new Error("JSON Parsing Error");
  }

  return questions;
}

async function getSchemaResponse(parsedResponse: TestQuestion[]) {
  const QuestionSchema = z.array(
    z.object({
      question: z.string(),
      choices: z.record(z.string(), z.string()),
      answer: z.array(z.string()),
      explanation: z.string(),
      example: z.string().nullable().optional(),
    }),
  );

  const response = QuestionSchema.parse(parsedResponse); // throws

  return parsedResponse;
}

interface CleanupProps {
  validatedResponse: TestQuestion[];
  props: GenerateTestProps;
}

function cleanup({ validatedResponse, props }: CleanupProps) {
  // truncate questions if necessary
  const cleanedResponse = validatedResponse.slice(0, props.questionCount);

  // replace null with ""
  for (const q of cleanedResponse) {
    if (q.example === null) {
      q.example = "";
    }
  }

  return cleanedResponse;
}
