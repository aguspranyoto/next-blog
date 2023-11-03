import Link from "next/link";
import BlogDetail from "./blogs/BlogDetail";
import PaginationControls from "./blogs/PaginationControls";

export const metadata = {
  title: "Post List",
};

async function getPosts() {
  const res = await fetch("https://gorest.co.in/public/v2/posts", {
    cache: "no-store",
  });
  return res.json();
}

async function PostList({ searchParams }) {
  const posts = await getPosts();
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const post = posts.slice(start, end);
  return (
    <div className="container mx-auto md:px-20">
      <h1 className="font-bold mt-8 text-4xl  text-center">Blog list</h1>
      <div className="flex w-full mx-auto items-center justify-center text-center ">
        <div className="container mx-auto w-full justify-center sm:px-5 my-5">
          {post.map((value, index) => (
            <div
              className="w-full mb-5 lg:pl-2 lg:pr-2 text-center "
              key={index}
            >
              <BlogDetail {...value} />
            </div>
          ))}
          <PaginationControls
            hasNextPage={end < posts.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </div>
  );
}

export default PostList;
