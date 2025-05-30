"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

// TODO: improve styles, submit button bg color, error doesnt jump, error color, a11y
const LOGIN_TITLE = "Log in";
const SIGNUP_TITLE = "Sign up";
const EMAIL_PLACEHOLDER_TEXT = "email";
const PASSWORD_PLACEHOLDER_TEXT = "password";
const SUBMIT_BTN_LOADING_CTA = "Loading...";
const SUBMIT_BTN_LOGIN_CTA = "Log in";
const SUBMIT_BTN_SIGNUP_CTA = "Sign up";
const SWITCH_TO_SIGNUP_TEXT = "Need an account? Sign up";
const SWITCH_TO_LOGIN_TEXT = "Have an account? Log in";

const AuthForm = ({ isSignUpPage = false }: { isSignUpPage?: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(isSignUpPage);

  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
      router.refresh(); // update server state
    }

    setLoading(false);
  };

  const title = isSignUp ? SIGNUP_TITLE : LOGIN_TITLE;
  const submitCta = isSignUp ? SUBMIT_BTN_SIGNUP_CTA : SUBMIT_BTN_LOGIN_CTA;
  const loadingOrSubmitCta = loading ? SUBMIT_BTN_LOADING_CTA : submitCta;
  const switchFormCta = isSignUp ? SWITCH_TO_LOGIN_TEXT : SWITCH_TO_SIGNUP_TEXT;

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
      <h2 className="mt-6 text-center text-3xl font-extrabold">{title}</h2>
      {error && <p className="text-[#E047DD] font-extrabold">{error}</p>}
      <input
        className="w-full border p-2"
        placeholder={EMAIL_PLACEHOLDER_TEXT}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2"
        type="password"
        placeholder={PASSWORD_PLACEHOLDER_TEXT}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2 cursor-pointer"
        onClick={handleSignIn}
        disabled={loading}
      >
        {loadingOrSubmitCta}
      </button>

      {/* TODO: make link or button, check a11y */}
      <p
        className="text-sm underline cursor-pointer"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {switchFormCta}
      </p>
    </div>
  );
};

export default AuthForm;
