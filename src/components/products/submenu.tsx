import SubMenu from "@/components/submenu";
import { config } from "@/config";

export default function TestSubMenu() {
  if (!config.nav?.learning?.children) {
    return null;
  }

  return (
    <SubMenu {...{ title: "Products", menu: config.nav.learning.children }} />
  );
}
