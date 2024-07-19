import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import SubMenu from "@/components/submenu";
import getSession from "@/lib/session";

export default async function DashBoard() {
  await getSession();

  return (
    <PageWithNav>
      <SubMenu title="Products" />

      <H2>Dashboard</H2>
    </PageWithNav>
  );
}
