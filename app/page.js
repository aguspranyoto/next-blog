import Link from "next/link";
import BlogDetail from "./blogs/BlogDetail";
import PaginationControls from "./blogs/PaginationControls";
import InputSearch from "./blogs/InputSearch";

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
  console.log(posts);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";
  const search = searchParams["search"] ?? "";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const filteredArray = posts.filter((value) =>
    value.title.toLowerCase().includes(search)
  );
  const post = filteredArray.slice(start, end);

  return (
    <div className="container mx-auto md:px-20">
      <h1 className="font-bold mt-8 text-4xl  text-center">Blog list</h1>
      <div className="flex w-full mx-auto items-center justify-center text-center ">
        <div className="container mx-auto w-full justify-center sm:px-5 my-5">
          <div className="flex items-center">
            <InputSearch locInput={""} />
            <PaginationControls
              hasNextPage={end < posts.length}
              hasPrevPage={start > 0}
            />
          </div>
          {post.map((value, index) => (
            <div
              className="w-full mb-5 lg:pl-2 lg:pr-2 text-center "
              key={index}
            >
              <BlogDetail {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;
