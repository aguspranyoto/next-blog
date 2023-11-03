import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";
import PaginationControls from "../blogs/PaginationControls";
import InputSearch from "../blogs/inputSearch";

export const metadata = {
  title: "User List",
};

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

export default async function UserList({ searchParams }) {
  const users = await getUsers();
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";
  const search = searchParams["search"] ?? "";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const filteredArray = users.filter(
    (value) =>
      value.name.toLowerCase().includes(search) ||
      value.email.toLowerCase().includes(search) ||
      value.gender.toLowerCase().includes(search) ||
      value.status.toLowerCase().includes(search)
  );
  const user = filteredArray.slice(start, end);

  return (
    <div className="pb-10 px-10 w-3/4 mx-auto">
      <h1 className="font-bold mt-8 text-4xl  text-center">User list</h1>
      <div className="flex justify-between items-center">
        <div className="py-2 ">
          <AddUser />
        </div>
        <div className="flex items-center">
          <InputSearch locInput={"users"} />
          <PaginationControls
            hasNextPage={end < users.length}
            hasPrevPage={start > 0}
            locPag={"users/"}
          />
        </div>
      </div>
      <div className="card card-normal w-100% bg-base-100 shadow-xl">
        <div className="card-body relative overflow-x-auto">
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
                    <UpdateUser {...user} />
                    <DeleteUser {...user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
