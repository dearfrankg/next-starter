import { AcmeLogo } from "@/assets/acme-logo";

export const config = {
  company: {
    name: "ACME",
    description: "A friendly globally minded company",
    logo: AcmeLogo,
  },
  nav: [
    {
      name: "Home",
      type: "link",
      href: "/",
    },
    {
      name: "Merch",
      type: "link",
      href: "/merch",
    },
    {
      name: "About Us",
      type: "link",
      href: "/about",
    },
  ],
  subnav: [
    {
      name: "Dashboard",
      type: "link",
      href: "/dashboard",
    },
    {
      name: "Generate Test",
      type: "link",
      href: "/generate-test",
    },
    {
      name: "Study",
      type: "link",
      href: "/study",
    },
    {
      name: "Take Test",
      type: "link",
      href: "/take-test",
    },
  ],
  testnav: [
    {
      name: "Test Prettier",
      type: "link",
      href: "/test/prettier",
    },
    {
      name: "Test UI",
      type: "link",
      href: "/test/ui",
    },
    {
      name: "Test Theme",
      type: "link",
      href: "/test/theme",
    },
  ],
};
