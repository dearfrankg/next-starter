"use client";

import ThemeSwitcher from "./theme-switcher";
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
import { cn } from "@/lib/utils";
import { Theme } from "@/types";
import "@radix-ui/react-avatar";
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
          <config.company.logo />
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
              <span className="text-lg">{obj.name}</span>
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
  const menuItemClasses =
    "flex h-5 w-full justify-start items-center hover:bg-accent text-lg font-light px-2 py-5 m-0 ";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className=""
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-0 mx-4 w-[200px] space-y-0 rounded-lg border-2 p-0">
        <DropdownMenuLabel className="p-0">
          <div className={"my-2 px-2 text-lg font-medium"}>Frank Gutierrez</div>
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
          <div className={menuItemClasses}>
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

/*














*/

// return (
//   <Navbar
//     disableAnimation
//     maxWidth="xl"
//     isMenuOpen={isMenuOpen}
//     onMenuOpenChange={setIsMenuOpen}
//   >
//     <div className="h-10 justify-start sm:hidden">
//       <NavbarMenuToggle />
//     </div>

//     <NavbarContent>
//       <NavbarBrand>
//         <Link href="/" color="foreground">
//           <div className="flex items-center">
//             <config.company.logo />
//             <p className="font-bold text-inherit">{config.company.name}</p>
//           </div>
//         </Link>
//       </NavbarBrand>
//     </NavbarContent>

//     <NavbarContent as="div" justify="end">
//       <div className="flex items-center gap-4">
//         {config.nav.map((obj) => {
//           return (
//             <NavbarItem key={obj.name} className="hidden sm:block">
//               <Link href={obj.href}>{obj.name}</Link>
//             </NavbarItem>
//           );
//         })}

//         <ThemeSwitcher theme={theme} />

//         <UserMenu />
//       </div>
//     </NavbarContent>

//     <NavbarMenu>
//       {config.nav.map((item, index) => (
//         <NavbarMenuItem key={`${item}-${index}`}>
//           <Link className="w-full" href={item.href} size="lg">
//             {item.name}
//           </Link>
//         </NavbarMenuItem>
//       ))}
//     </NavbarMenu>
//   </Navbar>
// );

// function UserMenu() {
//   return (
//     <Dropdown placement="bottom-end">
//       <DropdownTrigger>
//         <Avatar
//           isBordered
//           as="button"
//           className="transition-transform"
//           color="secondary"
//           name="Jason Hughes"
//           size="sm"
//           src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//         />
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Profile Actions" variant="flat">
//         <DropdownItem key="profile" className="h-14 gap-2">
//           <p className="font-semibold">Signed in as</p>
//           <p className="font-semibold">zoey@example.com</p>
//         </DropdownItem>
//         <DropdownItem key="settings">My Settings</DropdownItem>
//         <DropdownItem key="team_settings">Team Settings</DropdownItem>
//         <DropdownItem key="analytics">Analytics</DropdownItem>
//         <DropdownItem key="system">System</DropdownItem>
//         <DropdownItem key="configurations">Configurations</DropdownItem>
//         <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//         <DropdownItem key="logout" color="danger">
//           Log Out
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
