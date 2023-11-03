import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/blogs"}>Blogs</Link>
      <Link href={"/users"}>Users</Link>
    </div>
  );
}
