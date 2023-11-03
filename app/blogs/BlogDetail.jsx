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
    <div className="card card-normal w-100% bg-base-100 shadow-xl ">
      <div className="card-body">
        <Link href={`/blogs/${post.id}`}>
          <h2 className="card-title truncate">{post.title}</h2>
        </Link>
        <Link href={`/blogs/${post.id}`}>
          <p className="truncate">{post.body}</p>
        </Link>
        <div className="card-actions justify-end">
          <Link
            href={`/blogs/${post.id}`}
            type="button"
            className="btn btn-primary btn-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

// <div>
//   <div className="rounded-lg p-2 shadow-lg px-4 ">
//     <Link href={`/blogs/${post.id}`}>
//       <h2 className="flex flex-start font-bold p-2 truncate">
//         {post.title}
//       </h2>
//     </Link>
//     <Link href={`/blogs/${post.id}`}>
//       <p className="flex flex-start p-2 truncate">{post.body}</p>
//     </Link>
//   </div>
// </div>
