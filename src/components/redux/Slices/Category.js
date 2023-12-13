import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  categoryBtn: -1,
  sale: true, 
  selectCategory: '',
  skeleton: true,
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
    removeColorCategoryBtn: (state) => {
      state.categoryBtn = -1
    },
    selectedCategory: (state, action) => {
      state.selectCategory = action.payload
    },
    setSkeleton: (state, action) => {
      state.skeleton = action.payload
    }
  },
})


export const { setCategory, getColorCategoryBtn, getFalseSale, getTrueSale, selectedCategory, removeColorCategoryBtn, setSkeleton } = Category.actions;


export default Category.reducer