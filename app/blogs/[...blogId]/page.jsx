import React from "react";
import BlogDetail from "../BlogDetail";
import Link from "next/link";

async function getBlog(endpoint) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${endpoint}`);
  return res.json();
}
export default async function Blog({ params }) {
  const endpoint = params.blogId;
  console.log(endpoint);
  const posts = await getBlog(endpoint);
  console.log(posts);
  return (
    <div>
      <h1>blog detail</h1>
      <ul>
        <li>{posts.id}</li>
        <li>{posts.userId}</li>
        <li>{posts.title}</li>
        <li>{posts.body}</li>
      </ul>
    </div>
  );
}
