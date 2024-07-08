import SubMenu from "@/components/submenu";
import { config } from "@/config";

export default function TestSubMenu() {
  return <SubMenu {...{ menu: config.testnav }} />;
}
