import NextAuth from "next-auth";
import { authConfig } from "@/modules/SignIn/core/configs/auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
