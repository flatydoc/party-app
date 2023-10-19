import { ArtistsPage } from "@/pages/ArtistsPage/ArtistsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists | PartyApp",
};

export default function Artists() {
  return <ArtistsPage />;
}
