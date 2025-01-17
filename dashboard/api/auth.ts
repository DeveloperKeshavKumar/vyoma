const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function login(email: string, password: string) {
   const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
   });
   const data = await res.json();
   if (!data.success) {
      throw Error(data.message);
   }
   return data.user;
}
export async function signup(email: string, password: string) {
   const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password , name:"unkown User", role:"seller"}),
   });
   const data = await res.json();
   if (!data.success) {
      throw Error(data.message);
   }
   return data.user;
}