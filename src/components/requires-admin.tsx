import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import getSession from "@/lib/session";
import React from "react";

export async function RequiresAdmin({ children }: { children: any }) {
  const session = await getSession();

  if (!session.isAdmin) {
    return (
      <Alert className="w-full rounded-lg border bg-red-500 px-4 py-3 text-sm">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You need Admin privileges to access to this page.
        </AlertDescription>
      </Alert>
    );
  }

  return children;
}
