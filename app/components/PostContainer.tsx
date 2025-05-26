"use client";
import Post from "./Post";
import { useFetchPosts } from "../hooks/useFetchPosts";

// const NAVBAR_TITLE = "JASREON";
// const DASHBOARD_LINK_TEXT = "Dashboard";
// const LOGIN_LINK_TEXT = "Login";
// const SIGNUP_LINK_TEXT = "Sign Up";

// const mockPosts = [
//   {
//     id: "000",
//     user_id: "000",
//     title: "Hello, here's a video",
//     content: "thanks for checking out my new video",
//     media_url: "https://youtu.be/YPVuBRvOx4s?si=-5wzeOtnolmJjyOw",
//     created_at: "2020-06-15 02:03:24",
//   },
//   {
//     id: "001",
//     user_id: "000",
//     title: "Hello, here's a song",
//     content: "hey thanks for checking out my new song",
//     media_url: "https://youtu.be/YPVuBRvOx4s?si=-5wzeOtnolmJjyOw",
//     created_at: "2020-06-15 02:03:25",
//   },
//   {
//     id: "002",
//     user_id: "000",
//     title: "",
//     content: "hey thanks for checking out my new song",
//     media_url: "https://youtu.be/YPVuBRvOx4s?si=-5wzeOtnolmJjyOw",
//     created_at: "2020-06-15 02:03:25",
//   },
//   {
//     id: "003",
//     user_id: "000",
//     title: "Hello, here's a song",
//     content: "",
//     media_url: "",
//     created_at: "2020-06-15 02:03:25",
//   },
//   {
//     id: "004",
//     user_id: "000",
//     title: "Hello, here's a song",
//     content: "hey thanks for checking out my new song",
//     media_url: "",
//     created_at: "2020-06-15 02:03:25",
//   },
// ];

export type PostType = {
  id: string;
  user_id: string;
  title?: string;
  content?: string;
  media_url?: string;
  created_at: string;
};

const PostContainer = () => {
  const { posts, error, loading } = useFetchPosts();

  console.log("posts", posts, error, loading);

  // TODO add better error state
  // TODO add better loader to loading state

  if (error) {
    alert("Error: " + error?.message);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex justify-between items-center flex-col">
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
