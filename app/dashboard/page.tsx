import { redirect } from "next/navigation";
import PostContainer from "@/components/PostContainer";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // fallback check (middleware should already handle this)
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">GET THIS</h1>
      <p>Welcome, {user?.email}!</p>
      <p>User ID: {user?.id}</p>
      <PostContainer />
    </div>
  );
}
