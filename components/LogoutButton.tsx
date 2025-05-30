"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// TODO: maybe add are you sure? nudge
// TODO: figure out best style and placement of logout button

const BUTTON_CTA = "Log Out";

export const LogoutButton = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <button
      className="px-4 py-0.5 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={handleLogout}
    >
      {BUTTON_CTA}
    </button>
  );
};
