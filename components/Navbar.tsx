"use client";

import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
import { useAuth } from "@/app/hooks/useAuth";

const NAVBAR_TITLE = "JASREON";
const DASHBOARD_LINK_TEXT = "Dashboard";
const ABOUT_LINK_TEXT = "About";
const LOGIN_LINK_TEXT = "Login";

// TODO: organize nav links into arrays and map based on public/private or specific page demands

const SignedInNavLinks = () => (
  <>
    <Link href="/dashboard">{DASHBOARD_LINK_TEXT}</Link>
    <Link href="/about">{ABOUT_LINK_TEXT}</Link>
    <LogoutButton />
  </>
);

const SignedOutNavLinks = () => (
  <>
    <Link href="/about">{ABOUT_LINK_TEXT}</Link>
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
      <div className="space-x-4">
        {!loading &&
          (isSignedIn ? <SignedInNavLinks /> : <SignedOutNavLinks />)}
      </div>
    </nav>
  );
};

export default Navbar;
