import { SessionContextValue } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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

export interface Category {
  name: string;
}

export interface Config {
  baseUrl: string;
  company: {
    name: string;
    description: string;
    logo: string;
  };
  signIn: { redirectUrl: string };
  nav: NavItem[];
  categories: Category[];
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

export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
