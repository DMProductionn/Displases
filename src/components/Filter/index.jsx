import React from 'react';
import './Filter.css'

export default function Filter() {
  return (
    <div className={`flex filterr relative`}>
      {/* Кнопка фильтры */}
      <button
        className={`h-[40px] uppercase text-[12px] bg-[#333232] rounded-[6px] flex items-center justify-center w-[103px] pt-[12px] pb-[10px]`}>
        ФИЛЬТРЫ
        <img className="ml-[4px]" src="./img/icons/chevron-right.svg" alt="arrow" />
      </button>
      {/* Выпадающее меню с фильтрами */}
      <div className={``}>
        <div className= {`FilterPopup active absolute rounded-[6px] bg-gray-light flex max-w-[150px] w-full px-[12px] py-[10px]`}>
          <div className="flex justify-between w-full">
            <p>Цена</p>
            <img src="./img/icons/chevron-right.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
