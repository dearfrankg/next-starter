import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { AITestGenerator } from "@/components/pages/(learning)/generate";
import SubMenu from "@/components/submenu";
import getSession from "@/lib/session";
import { SearchParamProps } from "@/types";

export default async function DashBoard({ searchParams }: SearchParamProps) {
  const session = await getSession();
  const userId = session?.user?.id as string;

  return (
    <PageWithNav>
      <SubMenu title="Learning" />

      <H2>Generate Course</H2>

      <AITestGenerator {...{ userId, searchParams }} />
    </PageWithNav>
  );
}
