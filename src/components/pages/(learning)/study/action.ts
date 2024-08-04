"use server";

import prisma from "@/lib/prisma";
import { consoleJSON, printError } from "@/lib/utils";
import { LikedTest } from "@/types/prisma";
import { revalidatePath } from "next/cache";

interface UpdateLikedActionProps {
  likedId: string;
  testId: string;
  userId: string;
}

export const updateLikedAction = async ({
  likedId,
  testId,
  userId,
}: UpdateLikedActionProps) => {
  if (likedId) {
    try {
      await prisma.likedTest.delete({
        where: {
          id: likedId,
        },
      });
    } catch (e) {
      printError(e);
    }
  }

  if (!likedId) {
    try {
      await prisma.likedTest.create({
        data: {
          userId,
          testId,
        },
      });
    } catch (e) {
      printError(e);
    }
  }

  revalidatePath("/study");
};
