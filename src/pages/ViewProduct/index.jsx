import React from 'react';
import { Link } from 'react-router-dom';
import style from './ViewProduct.module.css';

import BackBtn from '../../components/BackBtn';

export default function ViewProduct() {
  return (
    <div className="bg-gray-main max-w-[1160px] w-full m-auto rounded-[6px] py-[12px] px-[20px]">
      <BackBtn />
      <div className="flex gap-[40px] mt-[20px]">
        <div className="flex flex-col gap-[12px] w-full">
          <div className="max-w-[535px] w-full border-[1px] border-gray-light rounded-[6px]">
            <img src="./img/Clothes/Hoodies/Hoodie-gray-front.webp" alt="hoodie" />
          </div>
          <div className="flex gap-[10px]">
            <div className="max-w-[262px] w-full border-[1px] border-gray-light rounded-[6px]">
              <img src="./img/Clothes/Hoodies/Hoodie-gray-front.webp" alt="hoodie" />
            </div>
            <div className="max-w-[262px] w-full border-[1px] border-gray-light rounded-[6px] pt-[10px]">
              <img width={262} src="./img/Clothes/Hoodies/Hoodie-gray-back.webp" alt="hoodie" />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <p className="text-[30px] leading-[125%] mb-[25px]">
            DISPLASES Hoodie <br /> I DONT CARE in Gray
          </p>
          <div className="flex gap-2 mb-[20px]">
            <p className="text-[22px] text-[#fff] leading-[110%]">12 300₽</p>
            <p className="line-through text-[22px] text-[#717171] leading-[110%]">15 500₽</p>
          </div>
          <div className='flex gap-[20px] max-w-[700px] w-full relative'>
            <button
              className={`${style.active} bg-gray-light h-[40px] uppercase text-[14px] font-[700] rounded-[6px] flex items-center justify-between px-[12px] w-[237px]`}>
              РАЗМЕР
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

            <button className='uppercase bg-[#F64343] rounded-[6px] max-w-[237px] w-full'>ADD TO CART</button>

            <div
              class={`${style.price} ${style.active} px-[12px] mt-[10px] bg-gray-main rounded-[6px] max-w-[237px] w-full absolute top-[40px]`}>
              <ul className="flex flex-col gap-[10px] pt-[13px] pb-[10px]">
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
                <li>
                  <button>XL</button>
                </li>
                <li>
                  <button>XXL</button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
