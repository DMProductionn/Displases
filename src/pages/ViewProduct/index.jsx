import React from 'react';
import { Link } from 'react-router-dom';

import BackBtn from '../../components/Buttons/BackBtn';
import SizeBtn from '../../components/Buttons/SizeBtn';

export default function ViewProduct() {
  return (
    <div className="bg-gray-main max-w-[1170px] w-full m-auto rounded-[6px] py-[12px] px-[20px]">
      <BackBtn />
      <div className="flex  gap-[40px] mt-[15px] mb-[25px]">
        <div className="w-full max-w-[500px]">
          <div className="border-[1px] border-gray-light max-w-[535px] w-full mb-[12px] rounded-[6px]">
            <img
              className="p-[20px]"
              src="./img/Clothes/Hoodies/Hoodie-gray-front.webp"
              alt="hoodie"
            />
          </div>
          <div className="flex gap-[10px]">
            <div className="border-[1px] border-gray-light max-w-[263px] w-full rounded-[6px]">
              <img
                className="p-[20px]"
                src="./img/Clothes/Hoodies/Hoodie-gray-front.webp"
                alt="hoodie"
              />
            </div>
            <div className="border-[1px] border-gray-light max-w-[263px] w-full rounded-[6px]">
              <img
                className="p-[20px]"
                src="./img/Clothes/Hoodies/Hoodie-gray-back.webp"
                alt="hoodie"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[500px]">
          <p className="text-[30px] leading-[125%] mb-[20px]">
            DISPLASES Hoodie <br /> I DONT CARE in Gray
          </p>
          <div className="mt-[8px] gap-[10px] relative">
            <div className="flex mb-[20px] gap-[8px]">
              <p className="text-[22px] leading-[110%]">12 300р</p>
              <p className="text-[#717171] line-through text-[22px] leading-[110%]">15 500р</p>
            </div>
            <div className="flex gap-[20px]">
              <SizeBtn />
              <button className="bg-[#F64343] w-full max-w-[237px] text-[14px] font-[700] rounded-[6px]">
                ADD TO CART
              </button>
            </div>

            <div className="flex flex-col gap-[20px] mt-[20px]">
              <div className='leading-[125%]'>
                <p className='text-[12px]'>Ткань: футер 3-х нитка 340гр</p>
                <p className='text-[12px]'>Лекала: умеренный оверсайз</p>
                <p className='text-[12px]'>Нанесение: тафтинг</p>
                <p className='text-[12px]'>Размеры: S / M / L / XL / XXL</p>
              </div>
              <div className='leading-[125%]'>
                <p className='text-[12px]'>Указания по стирке: стирать на 30 градусах</p>
                <p className='text-[12px]'>Указания по размерам:</p>
                <p className='text-[12px]'>S - рост 165-170см</p>
                <p className='text-[12px]'>М - рост 170-180смL - рост 180-185см</p>
                <p className='text-[12px]'>L - рост 185+см</p>
                <p className='text-[12px]'>XXL - рост 190+см</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
