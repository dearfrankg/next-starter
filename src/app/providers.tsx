import { BASE_PATH, auth } from "@/auth";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";

export async function Providers({ children }: { children: React.ReactNode }) {
  const session = await auth();
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
