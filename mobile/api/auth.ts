const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const registerUser = async (email: string, password: string, name: string) => {
   const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password, name, role: 'buyer' })
   });
   const data = await res.json();
   if (!data.success) {
      throw new Error(data.error)
   }

   return data;
}

export const loginUser = async (email: string, password: string) => {
   const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password })
   });
   const data = await res.json();
   if (!data.success) {
      throw new Error(data.error)
   }

   return data.user;
}