"use client";

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          p-10
          md:py-0
          
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <Link className="text-xl font-bold" href={"/"}>
            Next Blog App
          </Link>
        </div>

        <svg
          onClick={toggleNavbar}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={
            isOpen
              ? "w-full md:flex md:items-center md:w-auto"
              : "hidden w-full md:flex md:items-center md:w-auto"
          }
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                href={"/"}
                className="md:p-4 py-2 block hover:text-purple-400 text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/users"}
                className="md:p-4 py-2 block hover:text-purple-400 text-md"
              >
                User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
