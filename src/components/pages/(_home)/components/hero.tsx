import { cn } from "@/lib/utils";
import React from "react";

interface HeroProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  CTA: React.ReactNode;
  splashUrl: string;
}

export function Hero({ title, subTitle, CTA, splashUrl }: HeroProps) {
  return (
    <>
      <div className="relative mt-8 overflow-hidden">
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            <h1 className="block whitespace-nowrap text-4xl font-bold text-gray-800 dark:text-white sm:text-4xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-3 text-2xl text-gray-800 dark:text-neutral-400">
              {subTitle}
            </p>
            {CTA}
          </div>

          <div className="relative mx-auto mt-10 max-w-5xl">
            <div
              className={cn(
                "h-96 w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover sm:h-[480px]",
                splashUrl,
              )}
            ></div>

            <div className="absolute inset-0 size-full">
              <div className="flex size-full flex-col items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
