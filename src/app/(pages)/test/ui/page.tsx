import { H2 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import ShadButtons from "@/components/pages/test/shad-buttons";
import { RequiresAdmin } from "@/components/requires-admin";
import SubMenu from "@/components/submenu";

export default async function TestTheme() {
  return (
    <PageWithNav>
      <SubMenu title="Test" />

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
