import SubMenu from "@/components/submenu";
import { config } from "@/config";

export default function MainSubMenu() {
  return <SubMenu {...{ menu: config.subnav }} />;
}
