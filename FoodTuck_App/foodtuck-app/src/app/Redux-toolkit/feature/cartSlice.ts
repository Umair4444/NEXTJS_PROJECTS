import { ICart } from "@/app/utils/Types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the cart (empty array)
const initialState: ICart[] = [];

// Create a slice for cart functionality
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      let uuid = Math.floor(1000 + Math.random() * 9000);

      if (existingItem) {
        // If the item already exists in the cart, update the quantity
        (existingItem.quantity += action.payload.quantity), uuid;
      } else {
        // If it's a new item, add it to the cart
        let newitem = { ...action.payload, uuid };

        state.push(newitem);
      }
    },

    // Remove an item from the cart
    removeFromCart(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
  },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
