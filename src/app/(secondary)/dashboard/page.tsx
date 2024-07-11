import { H1 } from "@/components/heading";
import MainSubMenu from "@/components/main/submenu";

export default function DashBoard() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">
      <MainSubMenu />

      <H1>Dashboard</H1>
    </main>
  );
}
