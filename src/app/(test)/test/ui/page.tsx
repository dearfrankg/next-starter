import NextButtons from "@/components/demo/next-buttons";
import ShadButtons from "@/components/demo/shad-buttons";

export default function UI() {
  return (
    <main className="flex flex-col items-center gap-8 p-24">
      {/* shadcn-ui works with blue theme */}
      <ShadButtons />

      {/* next-ui works with buttons */}
      <NextButtons />
    </main>
  );
}
