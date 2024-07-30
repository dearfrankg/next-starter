import { TestWithCreator } from "@/types/prisma";

export interface PagedTestsReturnValue {
  tests: TestWithCreator[];
  count: number;
  page: number;
  totalPages: number;
}
