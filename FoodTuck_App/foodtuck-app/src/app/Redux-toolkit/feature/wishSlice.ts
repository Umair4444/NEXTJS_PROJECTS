import { createSlice } from "@reduxjs/toolkit";
import { IWish } from "@/app/utils/Types";

const initialState: IWish[] = [];

export const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWish(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload);
      }
    },
    removeFromWish(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;
export default wishSlice.reducer;
