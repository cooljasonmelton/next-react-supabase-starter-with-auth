// import Link from "next/link";

import { PostType } from "./PostContainer";

const getYouTubeEmbedUrl = (url: string): string => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
};

const Post = ({ post }: { post: PostType }) => {
  const { title, content, media_url } = post;
  const embedUrl = getYouTubeEmbedUrl(media_url || "");
  const isMediaPost = media_url && embedUrl;

  return (
    <div
      className={`w-full ${
        isMediaPost && "h-[400px]"
      } flex flex-col items-center mb-24`}
    >
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {isMediaPost && (
        <div className="w-full h-full aspect-w-16 aspect-h-9">
          <iframe
            src={embedUrl}
            title={title}
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default Post;
