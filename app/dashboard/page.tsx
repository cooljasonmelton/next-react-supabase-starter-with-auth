import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { maskEmail } from "../utils/maskEmail";

const DashboardPage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // fallback check (middleware already handles this)
  if (!user?.id) {
    redirect("/login");
  }

  const maskedUserEmail = maskEmail(user?.email);

  return (
    <div className="p-8">
      <h1 className="h1">GET THIS</h1>
      <h2 className="h2">Welcome, {maskedUserEmail}!</h2>
    </div>
  );
};
export default DashboardPage;
