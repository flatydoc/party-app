import { Profile } from "@/modules/Profile/Profile";
import { NextPage } from "next";

interface IProfilePageProps {
  session: {
    user: {
      name: string;
    };
  };
}

const ProfilePage: NextPage<IProfilePageProps> = ({ session }) => {
  return (
    <>
      {/* <h2>{session?.user?.name}</h2>
      <Link href={routes.MY_EVENTS}>My Events</Link> */}
      <Profile session={session} />
    </>
  );
};

export default ProfilePage;
