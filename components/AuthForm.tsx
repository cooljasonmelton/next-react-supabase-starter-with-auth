"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

// TODO: move text to consts
// TODO: improve styles, submit button bg color, error doesnt jump, error color

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

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

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
      <h2 className="mt-6 text-center text-3xl font-extrabold">Log in</h2>
      {error && <p className="text-[#E047DD] font-extrabold">{error}</p>}
      <input
        className="w-full border p-2"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2"
        onClick={handleSignIn}
        disabled={loading}
      >
        {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
      </button>
      <p
        className="text-sm underline cursor-pointer"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? "Already have an account? Log in" : "No account? Sign up"}
      </p>
    </div>
  );
};

export default AuthForm;
