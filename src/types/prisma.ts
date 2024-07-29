import { Prisma } from "@prisma/client";

export type TestWithCreator = Prisma.TestGetPayload<{
  select: {
    id: true;
    topic: true;
    description: true;
    creator: {
      select: {
        id: true;
        name: true;
      };
    };
  };
}>;

export type TestAttemptTableItem = Prisma.TestAttemptGetPayload<{
  select: {
    id: true;
    startedAt: true;
    totalCount: true;
    correctCount: true;
    percentage: true;
    user: {
      select: {
        id: true;
        name: true;
      };
    };
    test: {
      select: {
        id: true;
        topic: true;
      };
    };
  };
}>;
