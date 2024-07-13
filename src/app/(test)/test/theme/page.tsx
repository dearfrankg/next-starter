import { H1 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import TestSubMenu from "@/components/test/submenu";
import ThemeSwitcher from "@/components/theme-switcher";
import { Theme } from "@/types";
import { cookies } from "next/headers";

export default async function TestTheme() {
  const defaultTheme = { value: Theme.dark };
  const theme = cookies().get("theme") || defaultTheme;

  return (
    <PageWithNav>
      <TestSubMenu />

      <H1>Test Theme</H1>

      <div className="mx-auto flex w-2/3 flex-col items-start gap-8 rounded-md">
        <div className="mx-auto text-center text-lg">
          <ThemeSwitcher {...{ theme: theme?.value as Theme }} />
        </div>
      </div>
    </PageWithNav>
  );
}
