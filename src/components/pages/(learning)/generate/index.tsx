import { fields } from "./form";
import { Test, TestProps } from "./item";
import { TestSkeleton } from "./item-skel";
import { AITestGeneratorLayout } from "./layout";
import { Form } from "@/components/generic/form";
import { Pager } from "@/components/generic/pager";
import { getGeneratedTests } from "@/queries/tests/generated-tests";
import { SearchParamProps } from "@/types";

interface AITestGeneratorProps extends SearchParamProps {
  userId: string;
}

export async function AITestGenerator({
  userId,
  searchParams,
}: AITestGeneratorProps) {
  //

  const props = {
    form: {
      formTitle: "AI Test Generator Form",
      userId,
      fields,
    },
    tests: {
      title: "AI Generated Tests",
      promise: getGeneratedTests({ userId, searchParams }),
      searchParams,
      renderItem: ({ test, searchParams }: TestProps) => (
        <Test {...{ test, searchParams }} />
      ),
      renderSkel: () => <TestSkeleton />,
    },
  };

  return (
    <AITestGeneratorLayout
      {...{
        left: <Form {...props.form} />,
        right: <Pager {...props.tests} />,
      }}
    />
  );

  //
}
