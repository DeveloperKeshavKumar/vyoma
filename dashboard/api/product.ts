const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function listProducts() {
  const res = await fetch(`${API_URL}/products`, {cache:"no-cache"});
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Error while fetching products");
  }
  return data.products;
}
export async function fetchProductById(id: number) {
  const res = await fetch(`${API_URL}/products/${id}`);
  const data = await res.json();
  if (data.success === false) {
    throw new Error(data.message || data.error);
  }
  return data.product;
}