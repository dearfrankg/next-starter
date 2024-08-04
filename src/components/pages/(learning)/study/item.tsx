"use client";

import { updateLikedAction } from "./action";
import { Button } from "@/components/ui/button";
import { jsonString } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { LikedTest } from "@/types/prisma";
import { ReloadIcon } from "@radix-ui/react-icons";
import { usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";

export interface TestProps extends SearchParamProps {
  test: LikedTest;
}

export function Test({ test, searchParams }: TestProps) {
  if (!test) {
    return <div>No test found</div>;
  }

  const { topic, description } = test;

  return (
    <li className="rounded-lg border p-2 hover:bg-black/20 dark:hover:bg-white/20">
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
    </li>
  );
}

function Liked({ test }: { test: LikedTest }) {
  const [isPending, startTransition] = useTransition();
  const isLiked = !!test.likedBy.length;

  const handleClick = () => {
    startTransition(async () => {
      await updateLikedAction({
        likedId: test.likedBy[0]?.id || "",
        testId: test.id,
        userId: test.userId,
      });
    });
  };

  return (
    <Button onClick={handleClick} variant="secondary" className="text-red-400">
      {isPending ? (
        <ReloadIcon className="size-4 animate-spin" />
      ) : isLiked ? (
        <AiFillHeart className="size-4" />
      ) : (
        <AiOutlineHeart className="size-4" />
      )}
    </Button>
  );
}
