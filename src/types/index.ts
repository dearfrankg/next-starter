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

export interface Config {
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
