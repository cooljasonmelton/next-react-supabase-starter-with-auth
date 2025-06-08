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
      <h1 className="text-2xl font-bold mb-4">GET THIS</h1>
      <p>Welcome, {user?.email}!</p>
      <p>User ID: {user?.id}</p>
    </div>
  );
};
export default DashboardPage;
