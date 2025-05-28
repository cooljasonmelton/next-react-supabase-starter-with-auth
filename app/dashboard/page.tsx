"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import PostContainer from "../../components/PostContainer";
import useUser from "../hooks/useUser";

export default function Dashboard() {
  const { session } = useUser();

  // TODO: BUG: fix logout so dashboard is hidden after logout
  return (
    <ProtectedRoute>
      <div className="w-full">
        {/* TODO: should i do something like this hello? as UI or something else personalized? or nothing? */}
        <div>Hello, {session?.user?.email}!</div>
        <PostContainer />
      </div>
    </ProtectedRoute>
  );
}
