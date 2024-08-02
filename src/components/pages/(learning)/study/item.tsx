import { Button } from "@/components/ui/button";
import { jsonString } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { LikedTests } from "@/types/prisma";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";

export interface TestProps extends SearchParamProps {
  test: LikedTests;
}

export function Test({ test, searchParams }: TestProps) {
  if (!test) {
    return <div>No test found</div>;
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
          {description}
        </p>
      </div>
      <Liked {...{ test }} />
    </div>
  );
}

function Liked({ test }: { test: LikedTests }) {
  //
  return (
    <div>
      <Button variant="ghost" className="text-red-400">
        {test.likedBy.length ? (
          <AiFillHeart className="size-4" />
        ) : (
          <AiOutlineHeart className="size-4" />
        )}
      </Button>
    </div>
  );
}
