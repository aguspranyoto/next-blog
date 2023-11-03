"use client";

import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

export default function InputSearch() {
  const router = useRouter();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    router.push(`blogs?search=${text}`);
  }, [text, router]);

  // // search filter function
  // const searchFilter = (array) => {
  //   return array.filter((el) => el.name.common.toLowerCase().includes(Text));
  // };

  //Applying our search filter function to our array of countries recieved from the API
  // const filtered = searchFilter(users);

  return (
    <>
      <input type="text" placeholder="search.." onChange={handleChange} />
    </>
  );
}
