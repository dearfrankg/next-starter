import NextButtons from "@/components/demo/next-buttons";
import ShadButtons from "@/components/demo/shad-buttons";
import { H1 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import TestSubMenu from "@/components/test/submenu";
import { Theme } from "@/types";

export default async function TestTheme() {
  return (
    <PageWithNav>
      <TestSubMenu />

      <H1>Test UI</H1>

      <div className="flex flex-col gap-8">
        {/* shadcn-ui works with blue theme */}
        <ShadButtons />

        {/* next-ui works with buttons */}
        <NextButtons />
      </div>
    </PageWithNav>
  );
}
