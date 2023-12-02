import React from 'react';
import { Link } from 'react-router-dom';

export default function BackBtn() {
  return (
    <>
      <Link to="/">
        <button
          className={`h-[40px] uppercase text-[12px] bg-gray-light rounded-[6px] flex items-center justify-center w-[103px] pt-[12px] pb-[10px]`}>
          <img
            className={`arrowBack mr-[4px]`}
            src="./img/icons/chevron-right-white.svg"
            alt="arrow"
          />
          BACK
        </button>
      </Link>
    </>
  );
}
