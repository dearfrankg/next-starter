import TestSubMenu from "@/components/test/submenu";
import ThemeSwitcher from "@/components/theme-switcher";
import { Theme } from "@/types";
import { cookies } from "next/headers";

export default function Home() {
  const defaultTheme = { value: Theme.dark };
  const theme = cookies().get("theme") || defaultTheme;

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-4">
      <TestSubMenu />

      <div className="flex flex-col items-center gap-8 rounded-md">
        <ThemeSwitcher {...{ theme: theme?.value as Theme }} />
      </div>
    </main>
  );
}
