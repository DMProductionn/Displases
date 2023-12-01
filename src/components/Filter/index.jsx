import React from 'react';
import style from './Filter.module.css'

export default function Filter() {

  return (
    <div className={`flex filterr relative`}>
      {/* Кнопка фильтры */}
      <button
        className={`${style.filterBtn} ${style.active} bg-gray-light h-[40px] uppercase text-[12px] rounded-[6px] flex items-center justify-center w-[150px]`}>
        ФИЛЬТРЫ
        <svg className={`${style.arrowFilterSvg} ml-[4px]`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path className={`${style.active}`} fill-rule="evenodd" clip-rule="evenodd" d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z" fill="#fff"/>
        </svg>
      </button>
      {/* Выпадающее меню с фильтрами */}
        <div className= {`${style.FilterPopup} ${style.active} border-[#fff] min-w-[150px] absolute left-0 top-[50px] rounded-[6px] bg-gray-main w-full`}>
          <div className="px-[12px] rounded-[6px] flex justify-between items-center w-full h-[36px] bg-gray-light"> 
            <p>Цена</p>
            <button>
              <img className={`${style.arrow} ${style.active}`} width={16} height={16} src="./img/icons/chevron-right-white.svg" alt="arrow" />
            </button>
          </div>

          

          {/* фильтры цены */}
          <div class={`${style.price} ${style.active} px-[10px] bg-gray-main`}>
            <ul className='flex flex-col gap-[10px] pl-[10px] pt-[13px] pb-[10px]'>
              <li><button>от 8к до 10к</button></li>
              <li><button>от 10к до 12к</button></li>
              <li><button>от 12к до 20к</button></li>
            </ul>
          </div>

          <div className="px-[12px] flex justify-between items-center w-full h-[36px] bg-gray-light"> 
            <p className=''>Цвет</p>
            <button>
              <img className={`${style.arrow} ${style.active}`} width={16} height={16} src="./img/icons/chevron-right-white.svg" alt="arrow" />
            </button>
          </div>

          {/* фильтры цветов */}
          <div className={`${style.color} ${style.active} pl-[20px]`}>
            <ul className='py-[10px] flex flex-col gap-[10px]'>
              <li><button>Синий</button></li>
              <li><button>Белый</button></li>
              <li><button>Черный</button></li>
              <li><button>Серый</button></li>
            </ul>
          </div>

        </div>
    </div>
  );
}
