import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {}
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            // state.cart[`element${state.cart.length}`] = action.payload
            // state.cart.key1 = action.payload
            state.cart = {...state.cart, [action.payload]: 1}
        },
        plus: (state, action) => {
            state.cart[action.payload] += 1
        },
        remove: (state, action) => {
            // state.cart = state.cart.filter(el => el !== action.payload)
            const newCart = {...state.cart}
            delete newCart[action.payload]
            state.cart = newCart
        },
        removeAll: (state, action) => {
            state.cart = {}
        } ,
    }
})

export const { add, plus, remove, removeAll } = cartSlice.actions

export default cartSlice.reducer