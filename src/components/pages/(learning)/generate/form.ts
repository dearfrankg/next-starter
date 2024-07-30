import { Field } from "@/types/generator-form";
import { z } from "zod";

export const FormSchema = z.object({
  topic: z.string().min(1, "required"),
  description: z.string().min(2),
  purpose: z.string(),
  count: z.string(),
});

export const fields: Field[] = [
  {
    type: "input",
    name: "topic",
    label: "Topic",
    placeholder: "Enter a topic",
    description: "This is the topic of your test.",
  },
  {
    type: "input",
    name: "description",
    label: "Description",
    placeholder: "Enter a description",
    description: "Describe what this test is about.",
  },
  {
    type: "textarea",
    name: "purpose",
    label: "Purpose",
    placeholder: "Enter a purpose",
    description: "Describe what you hope to accomplish with this test.",
  },
  {
    type: "select",
    name: "count",
    label: "Number of Questions",
    placeholder: "Select a count",
    defaultValue: "10",
    choices: [
      { label: "10", value: "10" },
      { label: "20", value: "20" },
      { label: "50", value: "50" },
      { label: "80", value: "80" },
      { label: "100", value: "100" },
    ],
  },
];
