import AdminSubMenu from "@/components/admin/submenu";
import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { RequiresAdmin } from "@/components/requires-admin";
import { Users } from "@/components/users";
import { SearchParamProps } from "@/types";

export default async function UsersPage({ searchParams }: SearchParamProps) {
  return (
    <PageWithNav>
      <AdminSubMenu />

      <H2>Users</H2>

      <RequiresAdmin>
        <Users searchParams={searchParams} />
      </RequiresAdmin>
    </PageWithNav>
  );
}
