import React from "react";
import BlogDetail from "../BlogDetail";
import Link from "next/link";
import Image from "next/image";
import Comment from "../Comment";

async function getBlog(endpoint) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${endpoint}`);
  return res.json();
}

async function getComments() {
  const token =
    "2246e9a16b2a3cb4466331924f48a414a728437443c01cb219d8479848e139aa";
  const res = await fetch(`https://gorest.co.in/public/v2/comments`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Blog({ params }) {
  const comments = await getComments();
  const endpoint = params.blogId;

  const posts = await getBlog(endpoint);

  return (
    <div className="w-3/4 mx-auto items-center justify-center">
      <h1 className="font-bold mt-8 text-4xl  text-center">Blog detail</h1>
      <div className="container mx-auto my-5">
        <div className="w-full mb-5 lg:pl-2 lg:pr-2">
          <div className="card card-normal w-100% bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl">{posts.title}</h2>
              <p className="text-xl">{posts.body}</p>
              <hr className="mt-8" />
              <Comment data={comments} endpoint={endpoint} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
