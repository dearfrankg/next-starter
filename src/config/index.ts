import { Config } from "@/types";

export const config: Config = {
  company: {
    name: "ACME",
    description: "A friendly globally minded company",
    logo: "/acme.svg",
  },
  nav: {
    home: {
      name: "Home",
      href: "/",
    },
    learning: {
      name: "Products",
      children: [
        {
          name: "Products",
          description: "Products...",
        },
        {
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Product X",
          href: "/productx",
        },
        {
          name: "Product Y",
          href: "/producty",
        },
      ],
    },
    company: {
      name: "Company",
      children: [
        {
          name: "Company",
          description: "Company...",
        },
        {
          name: "About Us",
          href: "/about",
        },
        {
          name: "Merch",
          href: "/merch",
        },
      ],
    },
    test: {
      name: "Test",
      hide: true,
      children: [
        {
          name: "Test",
          description: "Test...",
        },
        {
          name: "Prettier",
          href: "/test/prettier",
        },
        {
          name: "UI",
          href: "/test/ui",
        },
        {
          name: "Theme",
          href: "/test/theme",
        },
        {
          name: "Auth",
          href: "/test/auth",
        },
      ],
    },
    admin: {
      name: "Admin",
      role: "admin",
      children: [
        {
          name: "Admin",
          description: "Admin...",
        },
        {
          name: "Users",
          href: "/admin/users",
        },
        {
          name: "Secret",
          href: "/admin/secret",
        },
        {
          name: "Test",
          href: "/test/auth",
        },
      ],
    },
    login: {
      name: "Sign In",
      signIn: true,
      children: [
        {
          name: "Frank Gutierrez",
          description: "",
        },
        {
          name: "Settings",
          href: "/admin/users",
        },
        {
          name: "Sign Out",
          signOut: true,
        },
      ],
    },
  },
};
