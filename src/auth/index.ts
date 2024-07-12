import { config } from "@/config";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  trustHost: true,
  theme: {
    logo: config.company.logo,
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  providers: [
    Google({ allowDangerousEmailAccountLinking: true }),
    GitHub({ allowDangerousEmailAccountLinking: true }),
  ],
  basePath: BASE_PATH,
  secret: process.env.AUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
