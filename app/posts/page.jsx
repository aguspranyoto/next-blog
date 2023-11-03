export const metadata = {
  title: "Post List",
};

async function getPosts() {
  const res = await fetch("https://gorest.co.in/public/v2/posts");
  return res.json();
}

async function PostList() {
  const posts = await getPosts();
  return (
    <div className="py-10 px-10">
      <table className="table w-full ">
        <thead className="bg-slate-200">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
