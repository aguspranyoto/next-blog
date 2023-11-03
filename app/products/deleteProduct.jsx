"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteProduct(product) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  async function handleDelete(productId) {
    setIsMutating(true);

    await fetch(`http://localhost:5000/products/${productId}`, {
      method: "DELETE",
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
            Are you sure to delete {product.title}?
          </h3>
          <div className="modal-action">
            <button className="btn" type="button" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(product.id)}
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
