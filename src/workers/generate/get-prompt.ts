import { GenerateTestProps } from ".";

export function getPrompt({
  topic,
  description,
  questionCount,
}: GenerateTestProps) {
  return `

Please generate a test without interuption in one go.

Leverage these typescript types:

export interface Choice {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface Question {
  questionNumber: number;
  question: string;
  subTopic; string;
  choices: Choice;
  answer: keyof Choice[];
  explanation: string;
  example?: string;
}

provide result in JSON format.

Using the type Question[], generate ${questionCount} random questions

Questions should be based on the following topic and description

  topic: ${topic}
  description: ${description}

Explanation property:

  provide a full paragraph.

Example property:

  only populate this field if a programming example is appropriate
  It should be in markdown format





`;
}
