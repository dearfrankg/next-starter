// sort import works
import favicon from "../../../favicon.ico";
import Image from "next/image";

export default function ClassSort() {
  return (
    <main className="m-8 flex flex-col items-start gap-8">
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
      <Image src={favicon} alt="pic" />
    </main>
  );
}
