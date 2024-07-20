import { Config } from "@/types";

export const config: Config = {
  baseUrl: "http://localhost:3000",
  company: {
    name: "ACME",
    description: "A friendly globally minded company",
    logo: "/acme.svg",
  },
  signIn: { redirectUrl: "/dashboard" },
  nav: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Company",
      children: [
        {
          name: "Company",
          description: "Our product soaks up the sun, and then it's toasted",
        },
        {
          name: "About Us",
          href: "/about",
          description: "",
        },
        {
          name: "Merch",
          href: "/merch",
          description: "",
        },
      ],
    },
    {
      name: "Products",
      children: [
        {
          name: "Products",
          description:
            "Check out our unique collection of high quality products.",
        },
        {
          name: "Dashboard",
          href: "/dashboard",
          description: "See our best sellers on the dashboard",
        },
        {
          name: "Product X",
          href: "/productx",
          description: "Product X is the best in its class",
        },
        {
          name: "Product Y",
          href: "/producty",
          description: "Product Y is our best seller",
        },
      ],
    },
    {
      name: "Test",
      hide: true,
      children: [
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
    {
      name: "Admin",
      role: "admin",
      children: [
        {
          name: "Admin",
          description: "You must be an admin user to utilize these services",
        },
        {
          name: "Users",
          href: "/admin/users",
          description: "",
        },
        {
          name: "Secret",
          href: "/admin/secret",
          description: "",
        },
        {
          name: "Test",
          href: "/test/auth",
          description: "",
        },
      ],
    },
    {
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
          description: "",
        },
        {
          name: "Sign Out",
          signOut: true,
          description: "",
        },
      ],
    },
  ],
};
