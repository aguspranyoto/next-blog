"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsMutating(true);
    const token =
      "2246e9a16b2a3cb4466331924f48a414a728437443c01cb219d8479848e139aa";

    await fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender,
        status: status,
      }),
    });

    setIsMutating(false);

    setName("");
    setEmail("");
    setGender("");
    setStatus("");

    router.refresh();
    setModal(false);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleChange}>
        Add new
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new user</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="user name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full input-bordered"
                placeholder="email"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Gender</label>
              <select
                className="select select-bordered"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label font-bold">Status</label>
              <select
                className="select select-bordered"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="modal-action">
              <button className="btn" type="button" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              ) : (
                <button className="btn" type="button">
                  <span className="loading loading-spinner loading-xs"></span>
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
