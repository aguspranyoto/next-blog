import Link from "next/link";
import React from "react";
Link;

function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-10">
        <ul className="flex justify-center flex-wrap text-sm text-slate-600">
          <li className="mx-2">
            <Link
              href={"/"}
              className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
            >
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link
              href={"/users"}
              className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
            >
              User
            </Link>
          </li>
        </ul>
        <hr className="my-4 w-full" />
        <p className="text-center text-sm text-slate-700">
          &copy; 2023 Next Blog App. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
