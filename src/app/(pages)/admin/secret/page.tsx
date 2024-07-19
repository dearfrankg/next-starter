import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { RequiresAdmin } from "@/components/requires-admin";
import SubMenu from "@/components/submenu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function Admin() {
  return (
    <PageWithNav>
      <SubMenu title="Admin" />

      <H2>Secret</H2>

      <RequiresAdmin>
        <Alert className="w-full rounded-lg border bg-green-500 px-4 py-3 text-sm">
          <AlertTitle>Congrats!</AlertTitle>
          <AlertDescription>
            You have access to the secret admin page.
          </AlertDescription>
        </Alert>
      </RequiresAdmin>
    </PageWithNav>
  );
}
