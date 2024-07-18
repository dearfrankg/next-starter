"use client";

import { DrawerMenu } from "./drawer-menu";
import { MenuBar } from "./menu-bar";
import { AcmeLogo } from "@/assets/acme-logo";
import ThemeSwitcher from "@/components/theme-switcher";
import { config } from "@/config";
import { NavSectionProps, Theme } from "@/types";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export interface NavBarProps {
  theme: Theme;
}

export default function NavBar({ theme }: NavBarProps) {
  const session = useSession();
  const router = useRouter();

  const props = {
    session,
    router,
    theme,
  };

  return (
    <div className="fixed w-full bg-card pt-4" style={{ zIndex: 9999 }}>
      <div className="mx-auto h-[50px] max-w-7xl border-b px-4 sm:px-8">
        <div className="flex h-[36px] w-full items-center justify-between gap-8">
          <div className="flex flex-grow items-center justify-start self-stretch">
            <Left {...props} />
          </div>
          <div className="flex flex-grow items-center justify-center self-stretch">
            <Center {...props} />
          </div>
          <div className="flex flex-grow items-center justify-end self-stretch">
            <Right {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Left(props: NavSectionProps) {
  return (
    <>
      <DrawerMenu {...props} />
      <Link href="/">
        <div className="flex items-center">
          <AcmeLogo />
          <p className="text-xl font-bold text-inherit">
            {config.company.name}
          </p>
        </div>
      </Link>
    </>
  );
}

function Center(props: NavSectionProps) {
  return <></>;
}

function Right(props: NavSectionProps) {
  return (
    <div className="flex items-center gap-8">
      <MenuBar {...props} />

      <ThemeSwitcher theme={props.theme} />
    </div>
  );
}
