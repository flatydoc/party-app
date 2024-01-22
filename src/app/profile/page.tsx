import { authConfig } from "@/modules/SignIn/core/configs/auth";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

// interface Props {
//   params: {
//     name: string;
//   };
// }

interface ISession {
  user: {
    name: string;
    email: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const session: ISession | null = await getServerSession(authConfig);
  if (session) {
    return {
      title: `${session.user.name} | PartyApp`,
    };
  }
  throw new Error("No auth");
}

export default async function Profile() {
  const session: ISession | null = await getServerSession(authConfig);
  if (session) {
    return <ProfilePage session={session} />;
  }
  throw new Error("No auth");
}
