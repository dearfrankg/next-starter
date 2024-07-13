import { H1 } from "@/components/heading";
import MainSubMenu from "@/components/main/submenu";
import PageWithNav from "@/components/page-with-nav";
import getSession from "@/lib/session";

export default async function DashBoard() {
  await getSession("/dashboard");

  return (
    <PageWithNav>
      <MainSubMenu />

      <H1>PageX</H1>
    </PageWithNav>
  );
}
