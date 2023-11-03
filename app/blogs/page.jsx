// ======= INI FILE BUAT BELAJAR SAJA
// ======= http://localhost:3002/blogs
// ======= halaman blogs hanya untuk belajar
import InputSearch from "./InputSearch";
import PaginationControls from "./PaginationControls";

async function getPosts() {
  const token =
    "2246e9a16b2a3cb4466331924f48a414a728437443c01cb219d8479848e139aa";
  const res = await fetch(`https://gorest.co.in/public/v2/posts`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

async function getUsers() {
  const token =
    "2246e9a16b2a3cb4466331924f48a414a728437443c01cb219d8479848e139aa";
  const res = await fetch(`https://gorest.co.in/public/v2/users`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
export default async function Home({ searchParams }) {
  const users = await getUsers();
  const posts = await getPosts();
  const search = searchParams["search"] ?? "";
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  //Our search filter function

  const filteredArray = users.filter(
    (value) =>
      value.name.toLowerCase().includes(search) ||
      value.email.toLowerCase().includes(search)
  );
  const user = filteredArray.slice(start, end);
  // const post = posts.slice(start, end);

  return (
    <div className="flex flex-col gap-2 items-center">
      <InputSearch />
      <table className="table w-full p-4">
        <thead className="bg-slate-200">
          <tr>
            <th className="text-xl">Name</th>
            <th className="text-xl">Email</th>
            <th className="text-xl">Gender</th>
            <th className="text-xl">Status</th>
            <th className="text-xl">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={index}>
              <td className="text-xl">{user.name}</td>
              <td className="text-xl">{user.email}</td>
              <td className="text-xl">{user.gender}</td>
              <td className="text-xl">{user.status}</td>
              <td className="flex">
                {/* <UpdateUser {...user} />
                <DeleteUser {...user} /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationControls
        hasNextPage={end < users.length}
        hasPrevPage={start > 0}
        location={"blogs/"}
      />

      <hr />

      {/* <div>
        {post.map((value, index) => (
          <p key={index}>{value.title}</p>
        ))}
      </div>
      <PaginationControls
        hasNextPage={end < posts.length}
        hasPrevPage={start > 0}
      /> */}
    </div>
  );
}
