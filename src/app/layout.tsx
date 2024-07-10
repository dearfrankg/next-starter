import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Theme } from "@/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.company.name,
  description: config.company.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultTheme = { value: Theme.dark };
  const theme = cookies().get("theme") || defaultTheme;

  return (
    <html lang="en" className={theme?.value}>
      <body className={cn(inter.className, "min-h-screen")}>
        <Providers>
          <NavBar {...{ theme: theme?.value as Theme }} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
