import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getColorCategoryBtn, getFalseSale, selectedCategory } from '../../redux/Slices/Category';

import './CategoryBtn.css';

export default function Category() {
  const dispatch = useDispatch();
  const { category, categoryBtn, selectCategory } = useSelector((state) => state.Category);

  const setCategoryBtn = (value, index) => {
    dispatch(getFalseSale());
    dispatch(getColorCategoryBtn(index));
    dispatch(selectedCategory(value))
  };

  console.log(category);
  console.log(selectCategory);

  return (
    <div className={`categoryWrapper hidden flex-wrap justify-between mb-[15px]`}>
      {category.map((value, index) => (
        <Link to="/category">
          <button
            onClick={() => setCategoryBtn(value, index)}
            key={index}
            className={
              categoryBtn === index
                ? `active p-[8px] min-w-[115px] bg-gray-main rounded-[6px] text-gray-text`
                : `p-[8px] min-w-[115px] bg-gray-main rounded-[6px] text-gray-text`
            }>
            {value}
          </button>
        </Link>
      ))}
    </div>
  );
}
