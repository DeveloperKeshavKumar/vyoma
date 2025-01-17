'use server';
import { API_URL } from '@/config';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createProduct(
   name: string,
   description: string,
   price: number
) {
   let redirectUrl = '/products';
   try {
      const token = cookies().get('token')?.value;
      const res = await fetch(`${API_URL}/products`, {
         method: 'POST',
         headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ name, description, price }),
      });
      const data = await res.json();
      if (!data.success) {
         if (res.status === 401) {
            redirectUrl = '/login';
         } else {
            throw new Error(data.error);
         }
      }
   } catch (error: unknown) {
      redirectUrl = `/products/create?errorMessage=${encodeURIComponent(
         'Failed to create product'
      )}`;
   } finally {
      redirect(redirectUrl);
   }
}