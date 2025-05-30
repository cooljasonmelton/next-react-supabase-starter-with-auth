import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

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

  const supabase = createClient();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("post")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
