import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import MainSubMenu from "@/components/products/submenu";
import getSession from "@/lib/session";

export default async function DashBoard() {
  await getSession("/dashboard");

  return (
    <PageWithNav>
      <MainSubMenu />

      <H2>Dashboard</H2>
    </PageWithNav>
  );
}
