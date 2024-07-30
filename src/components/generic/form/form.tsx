"use client";

import { components } from "./form-components";
import { FormSchema } from "@/components/pages/(learning)/generate/form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { consoleJSON, jsonString } from "@/lib/utils";
import { Field } from "@/types/generator-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

export function InputForm({ fields }: { fields: Field[] }) {
  //

  const defaultValues: { [key: string]: string } = {};
  for (const field of fields) {
    defaultValues[field.name] = field?.defaultValue || "";
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    consoleJSON(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof z.infer<typeof FormSchema>}
            render={({ field: fieldProps }) => {
              const Component = components[field.type];

              return (
                <FormItem>
                  <FormLabel className="text-foreground">
                    {field.label}
                  </FormLabel>
                  <FormDescription>{field.description}</FormDescription>
                  <FormMessage />
                  <FormControl>
                    <Component {...{ field, fieldProps }} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
