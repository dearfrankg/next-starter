import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { RequiresAdmin } from "@/components/requires-admin";
import SubMenu from "@/components/submenu";
import { Users } from "@/components/users";
import { SearchParamProps } from "@/types";

export default async function UsersPage({ searchParams }: SearchParamProps) {
  return (
    <PageWithNav>
      <SubMenu title="Admin" />

      <H2>Users</H2>

      <RequiresAdmin>
        <Users searchParams={searchParams} />
      </RequiresAdmin>
    </PageWithNav>
  );
}
