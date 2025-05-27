"use client";

import DashboardWrapper from "@/components/DashboardWrapper";
import LogoutButton from "@/components/LogoutButton";
import PostContainer from "../../components/PostContainer";
import useUser from "../hooks/useUser";

export default function Dashboard() {
  const { session } = useUser();

  // TODO: BUG: fix logout so dashboard is hidden after logout
  return (
    <DashboardWrapper>
      <div className="w-full">
        <LogoutButton />
        {/* TODO: should i do something like this hello? as UI or something else personalized? or nothing? */}
        <div>Hello, {session?.user?.email}!</div>
        <PostContainer />
      </div>
    </DashboardWrapper>
  );
}
