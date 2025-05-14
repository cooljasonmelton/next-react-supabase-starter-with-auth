"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    console.log("hit handleauth", email, password, isSignUp);
    setLoading(true);
    try {
      if (isSignUp) {
        const signin = await supabase.auth.signUp({ email, password });
        console.log("signin", signin);
      } else {
        const login = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        console.log("login", login);
      }
    } catch (err) {
      console.log("catch", err);
    }

    // TODO add error handling
    // if (error) {
    //   alert(error.message);
    // } else {
    //   alert("Check your inbox or you are now signed in!");
    // }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4">
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
        onClick={handleAuth}
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
