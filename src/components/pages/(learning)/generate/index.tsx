import { fields } from "./form";
import { AITestGeneratorLayout } from "./layout";
import { Form } from "@/components/generic/form";
import { Tests } from "@/components/generic/tests";
import { getTestsWithTestAttempts } from "@/queries/tests/test-with-test-attempts";
import { SearchParamProps } from "@/types";

export async function AITestGenerator({
  userId,
  searchParams,
}: { userId: string } & SearchParamProps) {
  //

  const props = {
    tests: {
      title: "Tests generated",
      promise: getTestsWithTestAttempts({ userId, searchParams }),
      userId,
      searchParams,
    },
  };

  return (
    <AITestGeneratorLayout
      {...{
        left: (
          <Form
            {...{
              formTitle: "AI Test Generator Form",
              userId,
              fields,
            }}
          />
        ),
        right: <Tests {...props.tests} />,
      }}
    />
  );

  //
}
