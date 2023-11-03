"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogDetail(post) {
  const [id, setId] = useState(post.id);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [userId, setUserId] = useState(post.userId);

  // const posts = await getPosts();

  return (
    <div>
      <div className="rounded-lg p-2 shadow-lg px-4 ">
        <Link href={`/blogs/${post.id}`}>
          <h2 className="flex flex-start font-bold p-2 truncate">
            {post.title}
          </h2>
        </Link>
        <Link href={`/blogs/${post.id}`}>
          <p className="flex flex-start p-2 truncate">{post.body}</p>
        </Link>
      </div>
    </div>
  );
}
