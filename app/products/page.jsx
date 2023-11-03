async function getProducts() {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
}

async function ProductList() {
  const products = await getProducts();
  return (
    <div className="py-10 px-10">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
