import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { Study } from "@/components/pages/(learning)/study";
import SubMenu from "@/components/submenu";
import getSession from "@/lib/session";
import { SearchParamProps } from "@/types";

export default async function DashBoard({ searchParams }: SearchParamProps) {
  const session = await getSession();
  const userId = session?.user?.id as string;

  return (
    <PageWithNav>
      <SubMenu title="Learning" />

      <H2>Study</H2>

      <Study {...{ userId, searchParams }} />
    </PageWithNav>
  );
}
