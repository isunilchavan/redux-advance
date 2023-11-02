import { creatSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.item.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice:newItem.price,
          name:nameItem.title
        });
      }
      else{
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart() {},
  },
});
