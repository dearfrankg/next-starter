import AdminSubMenu from "@/components/admin/submenu";
import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import Users from "@/components/users";
import prisma from "@/lib/prisma";

export default async function Settings() {
  const users = await prisma.user.findMany();

  return (
    <PageWithNav>
      <AdminSubMenu />

      <H2>Users</H2>

      <Users users={users} />
    </PageWithNav>
  );
}
