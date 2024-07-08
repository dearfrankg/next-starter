import { MenuItem } from "@/types";
import Link from "next/link";

interface SubMenuProps {
  menu: MenuItem[];
}

export default function SubMenu({ menu }: SubMenuProps) {
  return (
    <div className="inline-block rounded-xl border-2 bg-card p-4">
      <div className="flex flex-wrap gap-8">
        {menu.map((item) => (
          <Link key={item.name} href={item.href} className="hover:underline">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
