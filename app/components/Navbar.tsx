import Link from "next/link";

const NAVBAR_TITLE = "JASREON";
const DASHBOARD_LINK_TEXT = "Dashboard";
const LOGIN_LINK_TEXT = "Login";
const SIGNUP_LINK_TEXT = "Sign Up";

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-2 border-b flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">{NAVBAR_TITLE}</Link>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">{DASHBOARD_LINK_TEXT}</Link>
        <Link href="/login">{LOGIN_LINK_TEXT}</Link>
        <Link href="/signup">{SIGNUP_LINK_TEXT}</Link>
      </div>
    </nav>
  );
}
