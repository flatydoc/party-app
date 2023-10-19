import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration | PartyApp",
};

export default function SignUp() {
  return <SignUpPage />;
}
