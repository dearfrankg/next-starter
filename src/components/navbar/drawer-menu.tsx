"use client";

import { AcmeLogo } from "@/assets/acme-logo";
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
import { config } from "@/config";
import { json } from "@/lib/utils";
import { NavItem, NavSectionProps, Theme } from "@/types";
import {
  SessionContextValue,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import Link from "next/link";
import React from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

export function DrawerMenu({ session, router, theme }: NavSectionProps) {
  const [open, setOpen] = React.useState(false);

  const handleNav = (value: string) => {
    router.push(value);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} noBodyStyles>
      <DrawerTrigger asChild>
        <div className="mr-2 md:hidden">
          <LuMenu className="size-8" />
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="hidden">Drawer Menu</DrawerTitle>
          <DrawerDescription className="hidden">
            Menu for use with mobile.
          </DrawerDescription>
          <div className="flex items-center">
            <div
              className="mr-2 hover:bg-accent sm:hidden"
              onClick={() => setOpen(false)}
            >
              <MdOutlineClose className="size-8" />
            </div>

            <div onClick={() => handleNav("/")} className="flex items-center">
              <AcmeLogo />
              <p className="font-bold text-inherit">{config.company.name}</p>
            </div>
          </div>
        </DrawerHeader>

        <div className="space-y-1 px-12 pt-4">
          {Object.keys(config.nav).map((navkey) => {
            const menuItem = config.nav[navkey];
            const props = {
              menuItem,
              handleNav,
              session,
            };

            if (menuItem.hide) return null;

            return <MenuItem key={navkey} {...props} />;
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MenuItemProps {
  menuItem: NavItem;
  handleNav: any;
  session: SessionContextValue<boolean>;
}

function MenuItem({ session, menuItem, handleNav }: MenuItemProps) {
  const isUnauthorized = !!menuItem?.role && session === null;
  const isLabel = !!menuItem?.children;

  if (isUnauthorized) {
    return null;
  }

  if (isLabel) {
    return (
      <>
        <div
          className="flex w-full gap-2 text-lg"
          onClick={() => handleNav(menuItem.href)}
        >
          {menuItem.name}
        </div>

        {!!menuItem?.children && (
          <div className="space-y-1 px-12 pb-4">
            {menuItem.children.map((item, n) => {
              const props = {
                menuItem: item,
                handleNav,
                session,
              };

              return <MenuItem key={n} {...props} />;
            })}
          </div>
        )}
      </>
    );
  }

  // isLink
  return (
    <div
      className="flex w-full gap-2 text-lg text-blue-500 hover:text-blue-400"
      onClick={() => handleNav(menuItem.href)}
    >
      {menuItem.name}
    </div>
  );
}
