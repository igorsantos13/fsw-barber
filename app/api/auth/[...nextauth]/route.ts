import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import { db } from "@/app/_lib/prisma";

export const authOptions = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
