import { FormSchema } from "@/components/pages/(learning)/generate/form";
import { ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

export interface Field {
  type: string;
  name: string;
  label: string;
  description?: string;
  placeholder: string;
  defaultValue?: string;
  choices?: { [key: string]: string }[];
}

export type FormSchemaType = z.infer<typeof FormSchema>;

export interface FieldProps {
  field: Field;
  fieldProps: ControllerRenderProps<FormSchemaType, keyof FormSchemaType>;
}

export interface FieldComponents {
  [key: string]: ({ field, fieldProps }: FieldProps) => JSX.Element | null;
}
