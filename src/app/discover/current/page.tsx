import CurrentEventsPage from "@/pages/Discover/CurrentEventsPage/CurrentEventsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Events | PartyApp",
};

export default function CurrentEvents() {
  return <CurrentEventsPage />;
}
