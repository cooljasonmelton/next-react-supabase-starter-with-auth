"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const BUTTON_CTA = "Log Out";

export const LogoutButton = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <button className="btn-primary-sm btn-primary:hover" onClick={handleLogout}>
      {BUTTON_CTA}
    </button>
  );
};
