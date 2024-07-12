"use server";

import { BASE_PATH, auth } from "@/auth";
import getSession from "@/lib/session";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";

export async function Providers({ children }: { children: React.ReactNode }) {
  // we only call getSession here to filter what gets passed down
  // not 100% necessary
  const session = await getSession();

  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
