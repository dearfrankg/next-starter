import { H1 } from "@/components/heading";
import MainSubMenu from "@/components/main/submenu";
import getSession from "@/lib/session";

export default async function DashBoard() {
  const session = await getSession("/dashboard");

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">
      <MainSubMenu />

      <H1>Dashboard</H1>
    </main>
  );
}
