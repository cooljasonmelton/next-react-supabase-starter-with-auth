"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/app/hooks/useUser";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useUser();
  const router = useRouter();

  console.log("DashboardWrapper", "session", session, loading);

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [session, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  } // TODO: add loading spinner / UI / gif?

  if (!session) {
    return null;
  } // redirect from useEffect^

  return <>{children}</>;
};

export default DashboardWrapper;
