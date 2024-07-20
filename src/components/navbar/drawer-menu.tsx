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
import { NavItem, NavSectionProps, Theme } from "@/types";
import { SessionContextValue, signOut } from "next-auth/react";
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
      <Trigger />

      <DrawerContent>
        <Header {...{ setOpen, handleNav }} />

        <Content {...{ session, handleNav }} />
      </DrawerContent>
    </Drawer>
  );
}

function Trigger() {
  return (
    <DrawerTrigger asChild>
      <div className="mr-2 md:hidden">
        <LuMenu className="size-8" />
      </div>
    </DrawerTrigger>
  );
}

interface HeaderProps {
  setOpen: any;
  handleNav: any;
}

function Header({ setOpen, handleNav }: HeaderProps) {
  return (
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
  );
}

interface ContentProps {
  session: any;
  handleNav: any;
}

function Content({ session, handleNav }: ContentProps) {
  return (
    <div className="space-y-1 px-12 pt-4">
      {config.nav.map((obj) => {
        const menuRole = obj?.role;
        const sessionRole = session?.data?.user?.role;
        const hasNonMatchingRoles =
          (!!menuRole && !sessionRole) ||
          (!!menuRole && !!sessionRole && menuRole !== sessionRole);

        const isHidden = !!obj.hide || hasNonMatchingRoles;

        if (isHidden) return null;

        const menuItem = obj;
        const props = {
          menuItem,
          handleNav,
          session,
        };

        return <MenuItem key={obj.name} {...props} />;
      })}
    </div>
  );
}

interface MenuItemProps {
  menuItem: NavItem;
  handleNav: any;
  session: SessionContextValue<boolean>;
}

function MenuItem({ session, menuItem, handleNav }: MenuItemProps) {
  const isUnauthorized = !!menuItem?.role && session === null;
  const isLabel = !!menuItem?.children && !menuItem?.href;
  const isHidden = !menuItem?.children && !menuItem?.href && !menuItem?.signOut;

  if (isUnauthorized || isHidden) {
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
      onClick={() =>
        menuItem.name === "Sign Out" ? signOut() : handleNav(menuItem.href)
      }
    >
      {menuItem.name}
    </div>
  );
}
