import { H1 } from "./heading";
import { config } from "@/config";
import { NavItem } from "@/types";
import Link from "next/link";

interface SubMenuProps {
  title: string;
}

export default function SubMenu({ title }: SubMenuProps) {
  const [menu] = config.nav.filter((menu) => menu.name === title);

  if (!menu?.children) {
    return null;
  }

  return (
    <div className="flex items-center gap-8">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="inline-block p-4">
        <div className="flex flex-wrap items-center gap-8">
          {menu?.children
            .filter((item) => !!item.href)
            .map((item) => (
              <Link
                key={item.name}
                href={item.href as string}
                className="hover:underline"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
