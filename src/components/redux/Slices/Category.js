import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  categoryBtn: localStorage.getItem('index', -1,),
  sale: true, 
  selectCategory: '',
}

export const Category = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    getTrueSale(state) {
      state.sale = true;
    },
    getFalseSale(state) {
      state.sale = false;
      localStorage.setItem('bool', false)
    },
    getColorCategoryBtn: (state, action) => {
      state.categoryBtn = action.payload;
    },
    selectedCategory: (state, action) => {
      state.selectCategory = action.payload
    }
  },
})


export const { setCategory, getColorCategoryBtn, getFalseSale, getTrueSale, selectedCategory } = Category.actions

export default Category.reducer