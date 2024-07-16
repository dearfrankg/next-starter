import SubMenu from "@/components/submenu";
import { config } from "@/config";

export default function CompanySubMenu() {
  if (!config.nav?.company?.children) {
    return null;
  }

  return (
    <SubMenu {...{ title: "Company", menu: config.nav.company.children }} />
  );
}
