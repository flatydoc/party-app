import { routes } from "@/core/configs/variables";
import { NextPage } from "next";
import Link from "next/link";

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
      <h2>{session?.user?.name}</h2>
      <Link href={routes.MY_EVENTS}>My Events</Link>
    </>
  );
};

export default ProfilePage;
