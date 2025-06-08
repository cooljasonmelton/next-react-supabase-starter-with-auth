"use client";

import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
import { useAuth } from "@/app/hooks/useAuth";

const NAVBAR_TITLE = "NEW PROJECT";
const DASHBOARD_LINK_TEXT = "Dashboard";
const LOGIN_LINK_TEXT = "Login";

// const navLinkMap = {
//   dashboard: {
//     href: "/dashboard",
//     text: DASHBOARD_LINK_TEXT,
//   },
//   login: {
//     href: "/login",
//     text: LOGIN_LINK_TEXT,
//   },
// };

const SignedInNavLinks = () => (
  <>
    <Link href="/dashboard">{DASHBOARD_LINK_TEXT}</Link>
  </>
);

const SignedOutNavLinks = () => (
  <>
    <Link href="/login">{LOGIN_LINK_TEXT}</Link>
  </>
);

const Navbar = () => {
  const { loading, isSignedIn } = useAuth();

  return (
    <nav className="w-full px-4 py-2 border-b flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">{NAVBAR_TITLE}</Link>
      </div>
      <div className="space-x-8 flex flex-nowrap">
        {!loading && (
          <>
            {isSignedIn ? <SignedInNavLinks /> : <SignedOutNavLinks />}
            {isSignedIn && <LogoutButton />}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
