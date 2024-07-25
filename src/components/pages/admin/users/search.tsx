"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDebounce } from "use-debounce";

const Search = ({ query }: { query?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(query);
  const [search] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!search) {
      router.push(`/admin/users`);
    } else {
      router.push(`/admin/users?query=${search}`);
    }
  }, [search, router]);

  return (
    <div className="relative flex-auto rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <GoSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <Input
        value={text}
        placeholder="Search users..."
        onChange={(e) => setText(e.target.value)}
        className="py-1.5 pl-10"
      />
    </div>
  );
};

export default Search;
