"use server";

import { BASE_PATH } from "@/auth";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider basePath={BASE_PATH}>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
