import { H1 } from "@/components/heading";
import MainSubMenu from "@/components/main/submenu";
import getSession from "@/lib/session";

export default async function PageY() {
  await getSession("/pagey");

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-4">
      <MainSubMenu />

      <H1>Page Y</H1>
    </main>
  );
}
