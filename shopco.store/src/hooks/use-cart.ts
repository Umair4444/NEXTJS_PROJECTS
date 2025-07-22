// "use client"

// import { create } from "zustand"
// import { persist } from "zustand/middleware"

// export interface CartItem {
//   id: string
//   name: string
//   price: number
//   originalPrice?: number
//   image: string
//   size?: string
//   color?: string
//   quantity: number
// }

// interface CartStore {
//   items: CartItem[]
//   addItem: (item: Omit<CartItem, "quantity">) => void
//   removeItem: (id: string) => void
//   updateQuantity: (id: string, quantity: number) => void
//   clearCart: () => void
//   getTotalPrice: () => number
//   getTotalItems: () => number
// }

// export const useCart = create<CartStore>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       addItem: (item) =>
//         set((state) => {
//           const existingItem = state.items.find((i) => i.id === item.id)
//           if (existingItem) {
//             return {
//               items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
//             }
//           }
//           return { items: [...state.items, { ...item, quantity: 1 }] }
//         }),
//       removeItem: (id) =>
//         set((state) => ({
//           items: state.items.filter((item) => item.id !== id),
//         })),
//       updateQuantity: (id, quantity) =>
//         set((state) => ({
//           items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
//         })),
//       clearCart: () => set({ items: [] }),
//       getTotalPrice: () => {
//         const { items } = get()
//         return items.reduce((total, item) => total + item.price * item.quantity, 0)
//       },
//       getTotalItems: () => {
//         const { items } = get()
//         return items.reduce((total, item) => total + item.quantity, 0)
//       },
//     }),
//     {
//       name: "cart-storage",
//     },
//   ),
// )

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string, size?: string, color?: string) => void;
  updateQuantity: (
    id: string,
    quantity: number,
    size?: string,
    color?: string
  ) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // ✅ Add or update item with quantity and variant matching
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) =>
              i.id === item.id && i.size === item.size && i.color === item.color
          );

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id &&
                i.size === item.size &&
                i.color === item.color
                  ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: item.quantity ?? 1 }],
          };
        }),

      // ✅ Remove by variant
      removeItem: (id, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(item.id === id && item.size === size && item.color === color)
          ),
        })),

      // ✅ Update quantity by variant
      updateQuantity: (id, quantity, size, color) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          ),
        })),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
