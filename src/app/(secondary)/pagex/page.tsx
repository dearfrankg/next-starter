import { H1 } from "@/components/heading";
import MainSubMenu from "@/components/main/submenu";
import getSession from "@/lib/session";

export default async function PageX() {
  const session = await getSession("/pagex");

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">
      <MainSubMenu />

      <H1>Page X</H1>
    </main>
  );
}
