import React from 'react';
import { Link } from 'react-router-dom';
import style from './ViewProduct.module.css'

import BackBtn from '../../components/BackBtn';


export default function ViewProduct() {
  return (
    <div className="bg-gray-main max-w-[1160px] w-full m-auto rounded-[6px] py-[12px] px-[20px]">
      <BackBtn />
      <div className="flex gap-[40px] mt-[15px]">
        <div className="">
          <div className="border-[1px] border-gray-light max-w-[535px] w-full mb-[20px]">
            <img
              className="p-[20px]"
              src="./img/Clothes/Hoodies/Hoodie-gray-front.webp"
              alt="hoodie"
            />
          </div>
          <div className="flex gap-[10px]">
            <div className="border-[1px] border-gray-light max-w-[263px] w-full">
              <img
                className="p-[20px]"
                src="./img/Clothes/Hoodies/Hoodie-gray-front.webp"
                alt="hoodie"
              />
            </div>
            <div className="border-[1px] border-gray-light max-w-[263px] w-full">
              <img
                className="p-[20px]"
                src="./img/Clothes/Hoodies/Hoodie-gray-back.webp"
                alt="hoodie"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[30px] leading-[125%] mb-[25px]">
            DISPLASES Hoodie <br /> I DONT CARE in Gray
          </p>
          <div className="flex mt-[8px] gap-[10px]">
            <p className="text-[22px] leading-[110%]">12 300р</p>
            <p className="text-[#717171] line-through text-[22px] leading-[110%]">15 500р</p>
            <button
              className={`${style.filterBtn} ${style.active} bg-gray-light h-[40px] uppercase text-[12px] rounded-[6px] flex items-center justify-center w-[150px]`}>
              ФИЛЬТРЫ
              <svg
                className={`${style.arrowFilterSvg} ml-[4px]`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  className={`${style.active}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z"
                  fill="#fff"
                />
              </svg>
            </button>

            <div className={`${style.price} ${style.active} px-[10px] bg-gray-main`}>
            <ul className='flex flex-col gap-[10px] pl-[10px] pt-[13px] pb-[10px]'>
              <li><button>от 8к до 10к</button></li>
              <li><button>от 10к до 12к</button></li>
              <li><button>от 12к до 20к</button></li>
            </ul>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
