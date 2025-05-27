import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Post = {
  id: string;
  user_id: string;
  title?: string;
  content?: string;
  media_url?: string;
  created_at: string;
};

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("post")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error);
        setPosts([]);
      } else {
        setPosts(data || []);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
