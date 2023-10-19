import { SubscriptionsPage } from "@/pages/SubscriptionsPage/SubscriptionsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My subscriptions | PartyApp",
};
export default function Subscriptions() {
  return <SubscriptionsPage />;
}
