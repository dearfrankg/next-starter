import CompanySubMenu from "@/components/company/submenu";
import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";

export default function About() {
  return (
    <PageWithNav>
      <CompanySubMenu />

      <H2>About Us</H2>
    </PageWithNav>
  );
}
