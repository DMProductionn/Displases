import { createSlice } from "@reduxjs/toolkit";
export const Cart = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addElToCart: (state, action) => {
        },
        removeElFromCart: (state, action) => {

        },
        removeAllCart: (state, action) => {
            state.cart = state.cart.length = 0
        } ,
    }
})

export const { addElToCart, removeElFromCart, removeAllCart } = Cart.actions

export default Cart.reducer