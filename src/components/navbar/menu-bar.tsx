"use client";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { NavItem, NavSectionProps } from "@/types";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import * as React from "react";

export function MenuBar(props: NavSectionProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <NavigationMenu className="z-10 hidden md:block">
      <NavigationMenuList>
        {Object.keys(config.nav).map((navkey) => {
          const obj = config.nav[navkey];
          if (obj.hide) return null;

          return (
            <NavMenuItem key={navkey} navItem={obj} session={props.session} />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function NavMenuItem({
  navItem,
  session,
}: {
  navItem: NavItem;
  session: any;
}) {
  const isAuth = session?.status === "authenticated";
  const user = {
    name: session?.data?.user?.name || "",
    image: session?.data?.user?.image || "",
  };

  const hasChildren = !!navItem?.children;
  const hasDesc = navItem?.description !== undefined;
  const hasHref = !!navItem?.href;
  const hasSignIn = !!navItem?.signIn;
  const hasSignout = !!navItem?.signOut;

  const isMenuLink = !hasChildren && hasHref && !hasDesc;
  const isMenu = hasChildren && !hasHref;
  const isMenuItemLabel = !hasChildren && !hasHref && hasDesc;
  const isMenuItem = !hasChildren && hasHref && hasDesc;

  if (hasSignout) {
    return (
      <NavigationMenuItem className="cursor-pointer rounded-md py-[6px] hover:bg-accent">
        <div
          onClick={() => signOut()}
          className={cn(navigationMenuTriggerStyle, "py-2")}
        >
          <span className="ml-4 text-lg">{navItem.name}</span>
        </div>
      </NavigationMenuItem>
    );
  }

  if (hasSignIn) {
    return (
      <NavigationMenuItem className="cursor-pointer rounded-md border-none py-[6px] hover:bg-accent">
        {!isAuth && (
          <Button className="ml-4" onClick={() => signIn()}>
            Sign in
          </Button>
        )}

        {isAuth && (
          <>
            <NavigationMenuTrigger>
              <UserAvatar user={user} />
            </NavigationMenuTrigger>

            <NavigationMenuContent className="list-none">
              <div className="flex gap-8 bg-inherit">
                <div className="w-[160px]"></div>
                <div className="">
                  <ul className="w-[350px] border bg-background">
                    {navItem.children?.map((subItem) => (
                      <NavMenuItem
                        key={subItem.name}
                        navItem={subItem}
                        session={session}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </>
        )}
      </NavigationMenuItem>
    );
  }

  if (isMenu) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <span className="text-lg">{navItem.name}</span>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="list-none">
          <ul className="border bg-background">
            {navItem.children?.map((subItem) => (
              <NavMenuItem
                key={subItem.name}
                navItem={subItem}
                session={session}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (isMenuLink) {
    return (
      <Link href={navItem.href as string} legacyBehavior passHref>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle,
              "cursor-pointer rounded-md px-4 pb-[8px] pt-[9px] hover:bg-accent",
            )}
          >
            <span className="text-lg">{navItem.name}</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </Link>
    );
  }

  if (isMenuItem) {
    return (
      <Link href={navItem.href as string} legacyBehavior passHref>
        <NavigationMenuItem className="cursor-pointer rounded-md py-[6px] hover:bg-accent">
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle, "p-0")}>
            <div className="px-4 py-2">
              <span className="text-lg">{navItem.name}</span>
              {hasDesc && (
                <div className="text-sm leading-6 text-muted-foreground">
                  {navItem.description}
                </div>
              )}
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </Link>
    );
  }

  if (isMenuItemLabel) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-4 py-8 no-underline outline-none focus:shadow-md md:w-[400px] lg:w-[500px]">
            <div className="">
              <span className="text-lg">{navItem.name}</span>
              {hasDesc && (
                <div className="text-sm leading-6 text-muted-foreground">
                  {navItem.description}
                </div>
              )}
            </div>
          </div>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return null;
}

interface UserAvatarProps {
  user: {
    image: string;
    name: string;
  };
}

function UserAvatar({ user }: UserAvatarProps) {
  return (
    <div className="rounded-full border-2 border-slate-400 p-[1px]">
      <Avatar>
        <AvatarImage src={user.image} alt={`pic of ${user.name}`} />
        <AvatarFallback>
          <AvatarImage src={"/avatar_placeholder.png"} alt="placeholder pic" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
