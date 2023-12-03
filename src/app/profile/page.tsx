import { authConfig } from "@/core/configs/auth";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

// interface Props {
//   params: {
//     name: string;
//   };
// }

interface Session {
  user: {
    name: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const session: Session = await getServerSession(authConfig);
  return {
    title: `${session.user.name} | PartyApp`,
  };
}

export default async function Profile() {
  const session: Session = await getServerSession(authConfig);

  return <ProfilePage session={session} />;
}
