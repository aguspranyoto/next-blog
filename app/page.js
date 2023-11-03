import Link from "next/link";
import BlogDetail from "./blogs/BlogDetail";

export const metadata = {
  title: "Post List",
};

async function getPosts() {
  const res = await fetch("https://gorest.co.in/public/v2/posts", {
    cache: "no-store",
  });
  return res.json();
}

async function PostList() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto md:px-20">
      <h1 className="font-bold mt-8 text-4xl  text-center">Blog list</h1>
      <div className="flex w-full mx-auto items-center justify-center text-center ">
        <div className="container mx-auto w-full justify-center px-20 my-5">
          {posts.map((post, index) => (
            <div
              className="w-full mb-5 lg:pl-2 lg:pr-2 text-center "
              key={index}
            >
              <BlogDetail {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;
