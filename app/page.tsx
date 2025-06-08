import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// TODO: hero art for homepage?
// TODO: extract button to own component
// TODO: styles, add hardcoded button color to global css, check color a11y

const HOME_TITLE = "COME HERE";
const SIGNUP_BTN_CTA = "SIGN UP";

const HomePage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    redirect("/dashboard");
  }

  return (
    <div className="m-4 w-full flex flex-col items-center gap-4">
      <h1 className="h1">{HOME_TITLE}</h1>
      <Link href="/signup">
        <button className="btn-primary">{SIGNUP_BTN_CTA}</button>
      </Link>
    </div>
  );
};

export default HomePage;
