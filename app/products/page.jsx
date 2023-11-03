import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

export const metadata = {
  title: "Product List",
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full ">
        <thead className="bg-slate-200">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>Rp. {product.price}</td>
              <td className="flex">
                <UpdateProduct {...product} />
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
