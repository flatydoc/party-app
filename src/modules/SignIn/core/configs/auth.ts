import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import { makeAuth } from "../services/auth.service";
import { routes } from "../../../../core/configs/variables";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          required: true,
        },
        password: {
          label: "password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await makeAuth(credentials);
        const {
          data: {
            data: { user: userData },
          },
        } = user;
        return userData as User;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: routes.SIGN_IN,
  },
};
