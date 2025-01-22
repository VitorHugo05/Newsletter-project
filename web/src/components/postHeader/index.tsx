import React from "react";

interface PostHeaderProps {
  title: string;
  author: string;
  createdAt: string;
}

function PostHeader({ title, author, createdAt }: PostHeaderProps) {
  return (
    <div className="mb-4">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <h2 className="text-white-500 text-xl">
        Por {author} · {new Date(createdAt).toLocaleString()}
      </h2>
    </div>
  );
};

export default PostHeader;
