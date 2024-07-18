import Prisma from "@prisma/client";
import { User } from "next-auth";
import { SessionContextValue } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { z } from "zod";

export enum Theme {
  dark = "dark",
  light = "light",
}

export interface NavItem {
  name: string;
  hide?: boolean;
  href?: string;
  description?: string;
  role?: string;
  signIn?: boolean;
  signOut?: boolean;
  children?: NavItem[];
}

export interface Config {
  baseUrl: string;
  company: {
    name: string;
    description: string;
    logo: string;
  };
  nav: {
    [key: string]: NavItem;
  };
}

export interface NavSectionProps {
  session: SessionContextValue<boolean>;
  router: AppRouterInstance;
  theme: Theme;
}

export interface SearchParamProps {
  searchParams: { [key: string]: string }; // | string[] | undefined
}

export interface ParamProps {
  params: { [key: string]: string }; // | string[] | undefined
}
