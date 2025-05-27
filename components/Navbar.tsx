"use client";

import Link from "next/link";
import useLogout from "@/app/hooks/useLogout";

const NAVBAR_TITLE = "JASREON";
const DASHBOARD_LINK_TEXT = "Dashboard";
const ABOUT_LINK_TEXT = "About";
const LOGIN_LINK_TEXT = "Login";
const SIGNUP_LINK_TEXT = "Sign Up";

// TODO show / hide links based on logged in state

const Navbar = () => {
  const { handleLogout } = useLogout();
  return (
    <nav className="w-full px-4 py-2 border-b flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">{NAVBAR_TITLE}</Link>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">{DASHBOARD_LINK_TEXT}</Link>
        <Link href="/about">{ABOUT_LINK_TEXT}</Link>
        <Link href="/login">{LOGIN_LINK_TEXT}</Link>
        <Link href="/signup">{SIGNUP_LINK_TEXT}</Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
