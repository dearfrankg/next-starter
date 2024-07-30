import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FieldComponents, FieldProps } from "@/types/generator-form";

export const components: FieldComponents = {
  input: ({ field, fieldProps }: FieldProps) => {
    return (
      <Input
        className="rounded"
        placeholder={field.placeholder}
        {...fieldProps}
      />
    );
  },

  textarea: ({ field, fieldProps }: FieldProps) => {
    return (
      <Textarea
        className="rounded"
        placeholder={field.placeholder}
        {...fieldProps}
      />
    );
  },

  select: ({ field, fieldProps }: FieldProps) => {
    if (!field.choices) {
      return null;
    }

    return (
      <Select
        onValueChange={fieldProps.onChange}
        defaultValue={fieldProps.value}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={field.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {field.choices.map((item) => {
              return (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};
