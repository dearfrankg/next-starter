import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { cache } from "react";

// export default cache(auth);

export default async function getSession(target?: string) {
  const session = await cache(auth)();

  if (session === null) {
    const encodedTarget = target ? encodeURI(target) : encodeURI("/dashboard");

    redirect(`/api/auth/signin?callbackUrl=${encodedTarget}`);
  }
  return session;
}
