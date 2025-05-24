// import Link from "next/link";

import Post from "./Post";

// const NAVBAR_TITLE = "JASREON";
// const DASHBOARD_LINK_TEXT = "Dashboard";
// const LOGIN_LINK_TEXT = "Login";
// const SIGNUP_LINK_TEXT = "Sign Up";

export type PostType = {
  id: string;
  user_id: string;
  title?: string;
  content?: string;
  media_url?: string;
  created_at: string;
};

const mockPosts = [
  {
    id: "000",
    user_id: "000",
    title: "Hello, here's a video",
    content: "thanks for checking out my new video",
    media_url: "www.youtube.com",
    created_at: "2020-06-15 02:03:24",
  },
  {
    id: "001",
    user_id: "000",
    title: "Hello, here's a song",
    content: "hey thanks for checking out my new song",
    media_url: "www.youtube.com",
    created_at: "2020-06-15 02:03:25",
  },
];

const PostContainer = () => {
  return (
    <div className="w-full px-4 py-2 border-b flex justify-between items-center flex flex-col">
      PostContainer
      {mockPosts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
