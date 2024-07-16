"use server";

import { BASE_PATH } from "@/auth";
import { SessionProvider } from "next-auth/react";

export async function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider basePath={BASE_PATH}>{children}</SessionProvider>;
}
