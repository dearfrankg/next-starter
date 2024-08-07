import SelectCourses from "../../../../components/pages/(learning)/select";
import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import SubMenu from "@/components/submenu";
import getSession from "@/lib/session";

export default async function DashBoard() {
  await getSession();

  return (
    <PageWithNav>
      <SubMenu title="Learning" />

      <H2>Select Course</H2>

      <SelectCourses />
    </PageWithNav>
  );
}
