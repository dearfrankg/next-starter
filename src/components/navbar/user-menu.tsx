// "use client";

// import { AcmeLogo } from "@/assets/acme-logo";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { config } from "@/config";
// import { json } from "@/lib/utils";
// import { Theme } from "@/types";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { GoGear, GoLock, GoSignOut } from "react-icons/go";
// import { LuMenu } from "react-icons/lu";
// import { MdOutlineClose } from "react-icons/md";

// export function UserMenu(props: NavBarProps) {
//   const session = useSession();
//   const router = useRouter();

//   const menuItemClasses =
//     "flex h-5 w-full justify-start items-center hover:bg-accent text-lg font-light px-2 py-5 m-0 ";
//   const isLoading = session.status === "loading";
//   const name = session?.data?.user?.name;
//   const image = session?.data?.user?.image || undefined;
//   const isAdmin = session?.data?.user?.role === "admin";

//   if (!isLoading && !name) {
//     return <Button onClick={() => signIn()}>Sign In</Button>;
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger>
//         <div className="rounded-full border-2 border-slate-400 p-[1px]">
//           <Avatar>
//             <AvatarImage src={image} alt={`pic of ${name}`} />
//             <AvatarFallback>
//               <AvatarImage
//                 src={"/avatar_placeholder.png"}
//                 alt="placeholder pic"
//               />
//             </AvatarFallback>
//           </Avatar>
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="m-0 mx-4 w-[200px] space-y-0 rounded-lg border-2 p-0">
//         <DropdownMenuLabel className="p-0">
//           <div className={"my-2 px-2 text-lg font-medium"}>{name}</div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator className="h-[2px]" />
//         <DropdownMenuItem className="p-0">
//           <div className={menuItemClasses}>
//             <GoGear className="mr-2" />
//             Settings
//           </div>
//         </DropdownMenuItem>

//         {isAdmin && (
//           <DropdownMenuItem className="p-0">
//             <div
//               className={menuItemClasses}
//               onClick={() => {
//                 router.push("/admin/secret");
//               }}
//             >
//               <GoLock className="mr-2" />
//               Admin
//             </div>
//           </DropdownMenuItem>
//         )}
//         <DropdownMenuItem className="p-0">
//           <div
//             className={menuItemClasses}
//             onClick={() => {
//               signOut({
//                 redirect: true,
//                 callbackUrl: "/",
//               });
//             }}
//           >
//             <GoSignOut className="mr-2" />
//             Sign Out
//           </div>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
