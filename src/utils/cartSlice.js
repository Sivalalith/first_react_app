import { createSlice } from "@reduxjs/toolkit";

// creating a 'slice' of our store
const cartSlice = createSlice({
  // name of our slice
  name: "cart",

  // initial state of out slice -> no items present (default)
  initialState: {
    items: [],
  },

  // reducers ("value" ex: (state, action)=>{...}) associated to this slice for a particular action ("key" ex: addItem)
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

console.log("cart slice obj: ", cartSlice);

const { actions, reducer } = cartSlice;
export const { addItem, removeItem, clearCart } = actions;
export default reducer;
