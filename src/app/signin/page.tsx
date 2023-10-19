import { SignInPage } from "@/pages/SignInPage/SignInPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in | PartyApp",
};

export default function SignIn() {
  return <SignInPage />;
}
