import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import SubMenu from "@/components/submenu";

export default function About() {
  return (
    <PageWithNav>
      <SubMenu title="Company" />

      <H2>About Us</H2>
    </PageWithNav>
  );
}
