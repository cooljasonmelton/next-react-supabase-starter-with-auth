// import Link from "next/link";

import { PostType } from "./PostContainer";

const Post = ({ post }: { post: PostType }) => {
  const { title, content } = post;
  return (
    <div className="w-full px-4 py-2 border-b flex justify-between items-center">
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </div>
  );
};

export default Post;
