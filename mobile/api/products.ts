const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getProducts = async () => {
   const response = await fetch(`${API_URL}/products`);
   const data = await response.json();
   if (data.success === false) {
      throw new Error(data.error);
   }
   return data;
};

export const getProductById = async (id: number) => {
   const response = await fetch(`${API_URL}/products/${id}`);
   const data = await response.json();
   if (data.success === false) {
      throw new Error(data.error);
   }
   return data;
};