"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Comment({ data, endpoint }) {
  //   const [id, setId] = useState(value.id);
  //   const [postId, setPostId] = useState(value.post_id);
  //   const [name, setName] = useState(value.name);
  //   const [body, setBody] = useState(value.body);
  const params = endpoint;
  console.log(params);
  const comments = data;
  const filteredArray = comments.filter((value) => value.post_id == params);
  console.log(filteredArray);
  return (
    <div className="">
      <hr className="mt-8" />

      {filteredArray.map((item, index) => (
        <div className="flex justify-start gap-5 items-center" key={index}>
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
            <p className="text-xl font-bold">{item.name}</p>
            <p className="text-md ms-5">- {item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
