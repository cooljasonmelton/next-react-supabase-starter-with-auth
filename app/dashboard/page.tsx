"use client";

import DashboardWrapper from "@/components/DashboardWrapper";
import PostContainer from "../../components/PostContainer";
import useUser from "../hooks/useUser";

export default function Dashboard() {
  const { session } = useUser();

  return (
    <DashboardWrapper>
      <div className="w-full">
        {/* TODO: should i do something like this hello? as UI or something else personalized? or nothing? */}
        <div>Hello, {session?.user?.email}!</div>
        <PostContainer />
      </div>
    </DashboardWrapper>
  );
}
