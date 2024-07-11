import NextButtons from "@/components/demo/next-buttons";
import ShadButtons from "@/components/demo/shad-buttons";
import TestSubMenu from "@/components/test/submenu";

export default function UI() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">
      <TestSubMenu />

      <div className="flex flex-col gap-8">
        {/* shadcn-ui works with blue theme */}
        <ShadButtons />

        {/* next-ui works with buttons */}
        <NextButtons />
      </div>
    </main>
  );
}
