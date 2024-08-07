"use client";

import { CourseCard } from "./card";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SelectCoursesLayoutProps {
  courses: any[];
}

export function SelectCoursesLayout({ courses }: SelectCoursesLayoutProps) {
  const [category, setCategory] = useState("All");

  //
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="w-full">
        <span>Categories: </span>
        {[{ name: "All" }, ...config.categories].map((c) => {
          const categoryClass = category === c.name ? "underline" : "";
          return (
            <Button
              key={c.name}
              className={cn("hover:underline", categoryClass)}
              variant="link"
              onClick={() => setCategory(c.name)}
            >
              {c.name}
            </Button>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-around gap-8">
        {courses
          .filter(
            (course) => category === "All" || category === course.category,
          )
          .map((course) => {
            return <CourseCard key={course.title} {...course} />;
          })}
      </div>
    </div>
  );
}
