import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import SubMenu from "@/components/submenu";
import getSession from "@/lib/session";
import { getTest } from "@/queries/questions";

export default async function DashBoard() {
  const session = await getSession();
  const data = await getTest({ userId: session?.user?.id as string });

  return (
    <PageWithNav>
      <SubMenu title="Learning" />

      <H2>Dashboard</H2>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </PageWithNav>
  );
}
