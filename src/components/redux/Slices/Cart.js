import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.cart.push(action.payload)
            console.log(state.cart)
        },
        remove: (state, action) => {
            state.cart = state.cart.filter(el => el !== action.payload)
            console.log(state.cart)
        },
        removeAll: (state, action) => {
            state.cart = []
        } ,
    }
})

export const { add, remove, removeAll } = cartSlice.actions

export default cartSlice.reducer