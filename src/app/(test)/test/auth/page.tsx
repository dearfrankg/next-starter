import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { RequiresAdmin } from "@/components/requires-admin";
import TestSubMenu from "@/components/test/submenu";
import getSession from "@/lib/session";

export default async function DashBoard() {
  const session = await getSession("/dashboard");

  return (
    <PageWithNav>
      <TestSubMenu />

      <H2>Test Auth</H2>

      <RequiresAdmin>
        <div className="mx-auto flex w-2/3 flex-col items-start gap-8 rounded-md">
          <div className="mx-auto text-center text-lg">
            next page using server session -- {session?.user?.name}
          </div>
        </div>
      </RequiresAdmin>
    </PageWithNav>
  );
}

/*

This confirms that you can get the session using a server component
You can manually login using

- `/api/auth/signin`
- `/api/auth/signout`

*/
