import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import { RequiresAdmin } from "@/components/requires-admin";
import ShadButtons from "@/components/test/shad-buttons";
import TestSubMenu from "@/components/test/submenu";
import { Theme } from "@/types";

export default async function TestTheme() {
  return (
    <PageWithNav>
      <TestSubMenu />

      <H2>Test UI</H2>

      <RequiresAdmin>
        <div className="flex flex-col gap-8">
          {/* shadcn-ui works with blue theme */}
          <ShadButtons />
        </div>
      </RequiresAdmin>
    </PageWithNav>
  );
}
