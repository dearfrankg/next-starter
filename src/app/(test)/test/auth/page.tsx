import TestSubMenu from "@/components/test/submenu";
import getSession from "@/lib/session";

export default async function TestAuth() {
  const session = await getSession("/test/auth");

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-4">
      <TestSubMenu />

      <div className="mx-auto flex w-2/3 flex-col items-start gap-8 rounded-md">
        <div>next page using server session -- {session?.user?.name}</div>
      </div>
    </main>
  );
}

/*

This confirms that you can get the session using a server component
You can manually login using

- `/api/auth/signin`
- `/api/auth/signout`

*/
