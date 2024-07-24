// TODO: make the example in markdown format so you can see the code pretty

// import { Question } from "@/types";
// import prettier from "prettier";
// import tsParser from "prettier/parser-typescript";

// interface FormatQuestionsProps {
//   questions: Question[];
//   questionCount: number;
// }

// export async function formatQuestions({ questions, questionCount }: FormatQuestionsProps) {
//   let formattedQuestions: Question[];

//   formattedQuestions = questions.slice(0, questionCount);

//   // await makeCodePretty(formattedQuestions); // fails running with tsx

//   return formattedQuestions;
// }

// async function makeCodePretty(questions: Question[]) {
//   questions.forEach(async (q) => {
//     q.example = await makePrettier(q.example || "");
//   });
// }

// async function makePrettier(tsCode: string) {
//   return await prettier.format(tsCode, {
//     parser: "typescript",
//     printWidth: 70,
//     semi: true,
//     singleQuote: true,
//     plugins: [tsParser],
//   });
// }
