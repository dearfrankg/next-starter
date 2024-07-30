import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FormProps {
  formTitle: string;
  form: JSX.Element;
}

export const FormCard = ({ formTitle, form }: FormProps) => {
  return (
    <Card className={"mx-auto space-y-10 border-none p-6 shadow-none"}>
      <CardHeader className="p-0">
        <CardTitle>{formTitle}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">{form}</CardContent>
    </Card>
  );
};
