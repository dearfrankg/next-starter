import { SearchParamProps } from "@/types";
import { GoCheck } from "react-icons/go";
import { RiSurveyLine } from "react-icons/ri";

interface TestProps {
  test: any;
}

export function UserComponent({
  test,
  searchParams,
}: SearchParamProps & TestProps) {
  if (!test) {
    return <div> No test found</div>;
  }

  const { id, topic, description } = test;
  const { selectedTest } = searchParams;
  const testSelected = selectedTest === id;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="">
        <RiSurveyLine className="size-8" />
      </div>
      <div className="flex-auto space-y-1">
        <p className="text-sm font-medium leading-snug">{topic}</p>
        <p className="text-sm leading-snug text-muted-foreground">
          Creator: {test.creator.name}
        </p>
      </div>
      <div className="">{testSelected && <GoCheck className="size-8" />}</div>
    </div>
  );
}
