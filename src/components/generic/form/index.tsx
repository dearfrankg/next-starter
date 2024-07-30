import { InputForm } from "./form";
import { FormCard } from "./form-card";
import { Field, FieldComponents } from "@/types/generator-form";

interface FormProps {
  formTitle: string;
  userId: string;
  fields: Field[];
}

export const Form = ({ formTitle, userId, fields }: FormProps) => {
  return (
    <FormCard
      {...{
        formTitle,
        form: <InputForm {...{ fields }} />,
      }}
    />
  );
};
