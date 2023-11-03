import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";

export const metadata = {
  title: "User List",
};

async function getUsers() {
  const res = await fetch(`https://gorest.co.in/public/v2/users`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function UserList() {
  const users = await getUsers();

  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddUser />
      </div>
      <table className="table w-full ">
        <thead className="bg-slate-200">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td className="flex">
                <UpdateUser {...user} />
                <DeleteUser {...user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
