"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";

type GetUserReturnType = {
  data: { user: User | null };
  error: string | null;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }: GetUserReturnType) => {
      if (error) {
        // TODO: handle error
        setLoading(false);
        return;
      }

      setUser(data.user);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session) =>
        setUser(session?.user ?? null)
    );

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const isSignedIn = !!user?.id;

  return { user, loading, isSignedIn };
};
