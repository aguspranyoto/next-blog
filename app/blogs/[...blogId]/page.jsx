import React from "react";
import BlogDetail from "../BlogDetail";
import Link from "next/link";
import Image from "next/image";

async function getBlog(endpoint) {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${endpoint}`);
  return res.json();
}
export default async function Blog({ params }) {
  const endpoint = params.blogId;
  console.log(endpoint);
  const posts = await getBlog(endpoint);
  return (
    <div className="w-3/4 mx-auto items-center justify-center h-screen">
      <h1 className="font-bold mt-8 text-4xl  text-center">Blog detail</h1>
      <div className="container mx-auto my-5">
        <div className="w-full mb-5 lg:pl-2 lg:pr-2">
          <div className="card card-normal w-100% bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl">{posts.title}</h2>
              <p className="text-xl">{posts.body}</p>
              <hr className="mt-8" />
              <div className="flex justify-start gap-5 items-center">
                <div>
                  <Image
                    width={40}
                    height={40}
                    src={
                      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl font-bold">Anonymous</p>
                  <p className="text-md ms-5">
                    - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi amet dolor nemo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
