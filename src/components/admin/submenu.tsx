import SubMenu from "@/components/submenu";
import { config } from "@/config";

export default function AdminSubMenu() {
  if (!config.nav?.admin?.children) {
    return null;
  }

  return <SubMenu {...{ title: "Admin", menu: config.nav.admin.children }} />;
}
