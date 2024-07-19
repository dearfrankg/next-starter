import { auth } from "@/auth";
import { config } from "@/config";
import { redirect } from "next/navigation";
import { cache } from "react";

export default async function getSession(useRedirect = true) {
  const session = await cache(auth)();

  if (session === null && useRedirect) {
    const encodedTarget = encodeURI(config.signIn.redirectUrl);
    redirect(`/api/auth/signin?callbackUrl=${encodedTarget}`);
  }

  return { ...session, isAdmin: session?.user?.role === "admin" };
}
