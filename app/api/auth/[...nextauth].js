import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github"

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaClient from "../../../prisma/client";

export default NextAuth({
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
