// sort import works
import favicon from "../../../favicon.ico";
import TestSubMenu from "@/components/test/submenu";
import Image from "next/image";

export default function ClassSort() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 p-4">
      <TestSubMenu />

      <div className="mx-auto w-1/2 space-y-4">
        <p>
          Testing prettier is about checking that the code is formatted
          correctly.
        </p>

        <p>
          Look at the source code for this page and the comments will explain
          how prettier is working correctly.
        </p>
      </div>

      <div className="mx-auto space-y-8 text-center">
        {/*

      Before
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
      ...
      </button>

      After
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>

      */}
        {/* sort classes works */}
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          ...
        </button>{" "}
        <Image src={favicon} alt="pic" className="inline-block" />
      </div>
    </main>
  );
}
