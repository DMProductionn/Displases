import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
       
    ],
    totalPrice: 0
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.cart.push(action.payload)
            const newItem = action.payload
            // TODO: отображение и изменение стоимости товаров.
            state.totalPrice = state.totalPrice + newItem 
        },
        plus: (state, action) => {

        },
        remove: (state, action) => {
            state.cart = state.cart.filter(el => el !== action.payload)

        },
        removeAll: (state) => {
            state.cart = []
        } ,
    }
})

export const { add, plus, remove, removeAll } = cartSlice.actions

export default cartSlice.reducer