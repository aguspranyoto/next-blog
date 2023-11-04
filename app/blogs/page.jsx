import Link from "next/link";
import { comment } from "postcss";
import React from "react";
import Comment from "./Comment";

async function getComments() {
  const token =
    "2246e9a16b2a3cb4466331924f48a414a728437443c01cb219d8479848e139aa";
  const res = await fetch(`https://gorest.co.in/public/v2/comments`, {
    cache: "no-store",
  });
  return res.json();
}
export default async function Blog() {
  const comments = await getComments();
  console.log(comments);
  return (
    <div className="pb-10 px-10 w-3/4 mx-auto">
      <h1 className="font-bold mt-8 text-4xl  text-center">Comment list</h1>

      <div className="card card-normal w-100% bg-base-100 shadow-xl ">
        <div className="card-body">
          <Link href={`/`}>
            <h2 className="card-title truncate">Title</h2>
          </Link>
          <Link href={`/`}>
            <p className="truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              nemo.
            </p>
          </Link>
          <div className="card-actions justify-end">
            <Link href={`/`} type="button" className="btn btn-primary btn-sm">
              Read more
            </Link>
          </div>

          <div>
            <Comment data={comments} />
          </div>
        </div>
      </div>
    </div>
  );
}
