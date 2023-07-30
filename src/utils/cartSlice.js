import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) =>{
            // state.items.push(action.payload);
            if (state.items.find((item) => item.id === action.payload.id)) {
                state.items = state.items.map((item) => (item.id === action.payload.id) ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                state.items = [...state.items, action.payload];
            }
        },

//  ----------------------------
        incrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload) ? { ...item, quantity: item.quantity + 1 } : item)
        },
        decrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload) ? { ...item, quantity: item.quantity - 1 } : item)
        },
//  ------------------------------

        removeItem: (state, action) =>{
            // state.items.pop();
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) =>{
            state.items = [];
        },
    },
});

export const {addItem, incrQuantity, decrQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;