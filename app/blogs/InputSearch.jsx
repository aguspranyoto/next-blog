"use client";

import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function InputSearch({ locInput }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 1000);
  const loc = locInput;
  console.log(loc);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (query && loc.length > 0) {
      router.push(`/${loc.length > 0 && loc}?search=${query}`);
    } else {
      if (query) {
        router.push(`/?search=${query}`);
      }
    }
  }, [router, loc, query]);

  return (
    <>
      <input
        className="input w-full max-w-xs input-bordered"
        type="text"
        placeholder="search.."
        onChange={handleChange}
      />
    </>
  );
}
