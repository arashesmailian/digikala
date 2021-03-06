import { createSlice } from "@reduxjs/toolkit";

localStorage.setItem("cart_items", JSON.stringify({ items: [] }));
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: [],
    items: JSON.parse(localStorage.getItem("cart_items"))["items"],
  },
  reducers: {
    addToCart: (state, action) => {
      const p = state.items.findIndex((item) => item.id === action.payload.id);
      if (p >= 0) {
        state.items[p].count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("cart_items", JSON.stringify(state));
    },
    decreaseItem: (state, action) => {
      const p = state.items.findIndex((item) => item.id === action.payload.id);
      if (p > -1) {
        let value = state.items[p].count;
        if (value - 1) {
          state.items[p].count = state.items[p].count - 1;
        } else {
          state.items.splice(p, 1);
        }
      }
      localStorage.setItem("cart_items", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const p = state.items.findIndex((item) => item.id === action.payload.id);
      if (p > -1) {
        state.items.splice(p, 1);
        localStorage.setItem("cart_items", JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, decreaseItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
