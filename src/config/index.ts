import { Config } from "@/types";

export const config: Config = {
  baseUrl: "http://localhost:3000",
  company: {
    name: "ASSIMILATE",
    description: "An advanced study tool for learning",
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
          description: "We make learning more effective",
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
      name: "Learning",
      children: [
        {
          name: "Learning",
          description: "Learn and comprehend more using the Bradich technique",
        },
        {
          name: "Select Course",
          href: "/select",
          description: "Select from the existing courses",
        },
        {
          name: "Generate Course",
          href: "/generate",
          description: "Have the AI generate a course on any topic",
        },
        {
          name: "Study",
          href: "/study",
          description: "Review material on the subject",
        },
        {
          name: "Take Test",
          href: "/take",
          description: "Take the test to record your progress",
        },
        {
          name: "Dashboard",
          href: "/dashboard",
          description: "See your progress over time",
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
  categories: [
    { name: "Business" },
    { name: "Personal Development" },
    { name: "Academic Disciplines" },
  ],
};
