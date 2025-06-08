import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const DashboardPage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // fallback check (middleware already handles this)
  if (!user?.id) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="h1">GET THIS</h1>
      <h2 className="h2">Welcome, {user?.email}!</h2>
      <p>User ID: {user?.id}</p>
    </div>
  );
};
export default DashboardPage;
