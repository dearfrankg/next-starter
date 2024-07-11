"use client";

import ThemeSwitcher from "./theme-switcher";
import { AcmeLogo } from "@/assets/acme-logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { config } from "@/config";
import { Theme } from "@/types";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { GoGear, GoLock, GoSignOut } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

interface ThemeSwitchProps {
  theme: Theme;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export default function NavBar(props: ThemeSwitchProps) {
  return (
    <div className="fixed h-[50px] w-full border bg-card pt-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-[36px] w-full items-center justify-between gap-8">
          <div className="flex flex-grow items-center justify-start self-stretch">
            <Left />
          </div>
          <div className="flex flex-grow items-center justify-center self-stretch">
            <Center />
          </div>
          <div className="flex flex-grow items-center justify-end self-stretch">
            <Right {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <>
      <DrawerMenu />
      <Link href="/">
        <div className="flex items-center">
          <AcmeLogo />
          <p className="font-bold text-inherit">{config.company.name}</p>
        </div>
      </Link>
    </>
  );
}

function Center() {
  return <></>;
}

function Right(props: ThemeSwitchProps) {
  return (
    <div className="flex items-center gap-8">
      {config.nav.map((obj) => {
        return (
          <div key={obj.name} className="hidden sm:block">
            <Link href={obj.href}>
              <span className="text-nowrap text-lg">{obj.name}</span>
            </Link>
          </div>
        );
      })}

      <ThemeSwitcher theme={props.theme} />

      <UserMenu {...props} />
    </div>
  );
}

function UserMenu(props: ThemeSwitchProps) {
  const session = useSession();

  const menuItemClasses =
    "flex h-5 w-full justify-start items-center hover:bg-accent text-lg font-light px-2 py-5 m-0 ";
  const isLoading = session.status === "loading";
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;
  const image = session?.data?.user?.image || undefined;

  if (isLoading || !name) {
    return <Button onClick={() => signIn()}>Sign In</Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={image || "/avatar_placeholder"}
            alt="@shadcn"
            className=""
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-0 mx-4 w-[200px] space-y-0 rounded-lg border-2 p-0">
        <DropdownMenuLabel className="p-0">
          <div className={"my-2 px-2 text-lg font-medium"}>{name}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="h-[2px]" />
        <DropdownMenuItem className="p-0">
          <div className={menuItemClasses}>
            <GoGear className="mr-2" />
            Settings
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <div className={menuItemClasses}>
            <GoLock className="mr-2" />
            Admin
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <div
            className={menuItemClasses}
            onClick={() => {
              signOut({
                redirect: true,
                callbackUrl: "/",
              });
            }}
          >
            <GoSignOut className="mr-2" />
            Sign Out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DrawerMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleNav = (value: string) => {
    router.push(value);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} noBodyStyles>
      <DrawerTrigger asChild>
        <div className="mr-2 sm:hidden">
          <LuMenu className="size-8" />
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center">
            <div
              className="mr-2 hover:bg-accent sm:hidden"
              onClick={() => setOpen(false)}
            >
              <MdOutlineClose className="size-8" />
            </div>

            <div onClick={() => handleNav("/")} className="flex items-center">
              <config.company.logo />
              <p className="font-bold text-inherit">{config.company.name}</p>
            </div>
          </div>
        </DrawerHeader>

        <div className="space-y-8 px-12 pb-8 pt-4">
          {config.nav.map((item, index) => (
            <div key={`${item}-${index}`}>
              <div
                className="flex w-full gap-2 text-lg text-blue-500 hover:text-blue-400"
                onClick={() => handleNav(item.href)}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
