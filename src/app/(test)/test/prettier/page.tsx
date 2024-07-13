import favicon from "../../../favicon.ico";
import { H1 } from "@/components/heading";
import PageWithNav from "@/components/page-with-nav";
import TestSubMenu from "@/components/test/submenu";
import getSession from "@/lib/session";
import Image from "next/image";

{
  /* successfully sorted imports */
}

export default async function TestPrettier() {
  const session = await getSession("/dashboard");

  return (
    <PageWithNav>
      <TestSubMenu />

      <H1>Test Prettier</H1>

      <div className="mx-auto flex w-2/3 flex-col items-start gap-8 rounded-md">
        <div className="mx-auto text-wrap text-lg">
          Testing prettier is about checking that the code is formatted
          correctly. Look at the source code for this page and the comments will
          explain how prettier is working correctly.
        </div>
      </div>

      {/*


      */}
      <div className="mx-auto space-y-8 text-center">
        {/*

          successfully sorted tailwind classes

            Before
            <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
            ...
            </button>

            After
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
              ...
            </button>

        */}
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          ...
        </button>

        <Image src={favicon} alt="pic" className="inline-block" />
      </div>
    </PageWithNav>
  );
}
