import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { cartList } = state;
      const productToAdd = action.payload;

      const product = cartList.find(
        (prod) => prod["_id"] === productToAdd["_id"]
      );

      if (product) {
        product.quantity += productToAdd.quantity;
      } else {
        state.cartList.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
