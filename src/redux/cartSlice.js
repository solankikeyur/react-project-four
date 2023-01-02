import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        state.items.forEach((item) => {
            if(item.id === action.payload.id) {
                item.qty = item.qty + 1;
            }
        })
      } else {
        state.items.push(action.payload);
      }
    },
    calculatePrice: (state) => {
        if(state.items.length > 0) {
            state.total = 0;
            state.items.forEach((item) => {
                state.total = state.total + (item.qty * item.price)
            })
        }
    },
    removeItem: (state, action) => {
      if(state.items.length > 0) {
        state.items.forEach((item, index) => {
          if(item.id === action.payload) {
            state.items.splice(index,1);
          }
        })
      }
      if(state.items.length === 0) {
        state.total = 0;
      }
    }
  },
});

export const { addToCart, calculatePrice, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
