// import Link from "next/link";

import { PostType } from "./PostContainer";

// const NAVBAR_TITLE = "JASREON";
// const DASHBOARD_LINK_TEXT = "Dashboard";
// const LOGIN_LINK_TEXT = "Login";
// const SIGNUP_LINK_TEXT = "Sign Up";

const Post = (props: { post: PostType }) => {
  return (
    <div className="w-full px-4 py-2 border-b flex justify-between items-center">
      <h2>{props.post?.title}</h2>
      <p>{props.post?.content}</p>
    </div>
  );
};

export default Post;
