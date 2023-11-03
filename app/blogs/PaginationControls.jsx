"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ hasNextPage, hasPrevPage, locPag }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const loc = locPag;

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "3";

  return (
    <div className="flex container mx-auto w-full justify-center sm:px-5 my-5 items-center gap-3">
      <button
        className=" text-white p-2 btn btn-primary btn-sm"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/${loc && loc.length > 0 ? loc : ""}?page=${
              Number(page) - 1
            }&per_page=${per_page}`
          );
        }}
      >
        prev page
      </button>

      <div className="flex ">
        <div>{page}</div> / <div>{Math.ceil(10 / Number(per_page))}</div>
      </div>

      <button
        className=" text-white p-2 btn btn-primary btn-sm"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/${loc && loc.length > 0 ? loc : ""}?page=${
              Number(page) + 1
            }&per_page=${per_page}`
          );
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;
