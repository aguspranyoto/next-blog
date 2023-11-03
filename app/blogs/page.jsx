import Link from "next/link";
import BlogDetail from "./BlogDetail";

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
    <div className="flex w-3/4 mx-auto items-center justify-center text-center">
      <div className="container mx-auto flex flex-col px-20">
        {posts.map((post, index) => (
          <div className="w-full mb-5 lg:pl-2 lg:pr-2 " key={index}>
            <BlogDetail {...post} />
          </div>
        ))}
      </div>
    </div>

    // <div>
    //   {posts.map((post, index) => (
    //     <BlogDetail {...post} />
    //   ))}
    // </div>
  );
}

export default PostList;
