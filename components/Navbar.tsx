"use client";

import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
import { useAuth } from "@/app/hooks/useAuth";

const NAVBAR_TITLE = "NEW PROJECT";
const LOGIN_LINK_TEXT = "Login";

const SignedInNavLinks = () => (
  <>
    {/* explore */}
    {/* contact */}
    {/* etc. */}
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
    <nav className="w-full border-b flex justify-between items-center p-2">
      <div className="text-xl font-bold">
        <Link href="/">{NAVBAR_TITLE}</Link>
      </div>
      <div className="space-x-8 space-y-8 flex flex-nowrap font-bold">
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
