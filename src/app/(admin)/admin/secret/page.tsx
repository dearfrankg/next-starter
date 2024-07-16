import AdminSubMenu from "@/components/admin/submenu";
import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import getSession from "@/lib/session";

export default async function Admin() {
  const session = await getSession();

  if (!session.isAdmin) {
    return (
      <PageWithNav>
        <AdminSubMenu />

        <H2>Secret</H2>

        {/* shadcn-ui alert component covers menu-bar so we use a div instead */}
        <div className="w-full rounded-lg border bg-red-500 px-4 py-3 text-sm">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You need Admin privileges to access to this page.
          </AlertDescription>
        </div>
      </PageWithNav>
    );
  }

  return (
    <PageWithNav>
      <AdminSubMenu />

      <H2>Secret</H2>

      <div className="w-full rounded-lg border bg-green-500 px-4 py-3 text-sm">
        <AlertTitle>Congrats!</AlertTitle>
        <AlertDescription>
          You have access to the secret admin page.
        </AlertDescription>
      </div>
    </PageWithNav>
  );
}
