"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

// TODO: maybe add are you sure? nudge
// TODO: figure out best style and placement of logout button
const useLogout = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return { handleLogout };
};

export default useLogout;
