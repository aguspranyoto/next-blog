"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteUser(user) {
  const [IdUser, setIdUser] = useState(user.id);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  async function handleDelete(userId) {
    setIsMutating(true);
    const token =
      "2246e9a16b2a3cb4466331924f48a414a728437443c01cb219d8479848e139aa";
    await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete {IdUser} - {user.name}?
          </h3>
          <div className="modal-action">
            <button className="btn" type="button" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => {
                  handleDelete(user.id);
                }}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button className="btn" type="button">
                <span className="loading loading-spinner loading-xs"></span>
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
