import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  categoryBtn: -1,
  sale: false, 
  newCol: false,
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
    setSale(state, action) {
      state.sale = action.payload;
    },
    setNewCol(state, action) {
      state.newCol = action.payload;
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


export const { setCategory, getColorCategoryBtn, setSale, setNewCol, selectedCategory, removeColorCategoryBtn, setSkeleton } = Category.actions;


export default Category.reducer