import { create } from 'zustand';

export const useCart = create((set) => ({
   items: [],
   // TODO: if already in cart increase quantity
   addProduct: (product: any) =>
      set((state) => ({
         items: [...state.items,
         { product, quantity: 1 }]
      })),

   resetCart: () => { set({ items: [] }) }
}))
