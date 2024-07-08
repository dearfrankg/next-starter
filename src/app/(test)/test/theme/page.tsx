import ThemeSwitcher from "@/components/theme-switcher";
import { Theme } from "@/types";
import { cookies } from "next/headers";

export default function Home() {
  const defaultTheme = { value: Theme.dark };
  const theme = cookies().get("theme") || defaultTheme;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-8 rounded-md">
        <ThemeSwitcher {...{ theme: theme?.value as Theme }} />
      </div>
    </main>
  );
}
