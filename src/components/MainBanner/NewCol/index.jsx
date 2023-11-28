import React from 'react';
import style from './MainBannerNewCol.module.css';

export default function BannerNewCol() {
  return (
    <>
      <div className={`relative py-[20px] h-[850px] max-w-[570px] rounded-[12px] w-full bg-[#1D1D1D] ${style.mainBlock}`}>
        <div className="flex items-center h-[30px] pl-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="16"
            viewBox="0 0 97 16"
            fill="none">
            <path
              d="M17.4238 0.595703C19.6868 0.595703 21.5918 0.817708 23.1387 1.26172C24.6855 1.70573 25.9388 2.41471 26.8984 3.38867C27.8652 4.35547 28.5599 5.55859 28.9824 6.99805C29.4049 8.43034 29.6162 10.1849 29.6162 12.2617V16H23.0098V12.2617C23.0098 10.8509 22.8522 9.68001 22.5371 8.74902C22.222 7.81087 21.7135 7.06608 21.0117 6.51465C20.3171 5.95605 19.472 5.56576 18.4766 5.34375C17.4883 5.11458 16.2565 5 14.7812 5H6.5957V16H0V0.595703H17.4238Z"
              fill="white"
            />
            <path
              d="M38.4355 10.5V11.5957H57.8037V16H31.8398V0.595703H56.6973V5H38.4355V6.0957H53.625V10.5H38.4355Z"
              fill="white"
            />
            <path
              d="M77.043 5.79492L80.0293 0.595703H87.1836L80.8242 11.5957H82.1025L88.4512 0.595703H96.0674L87.1836 16H78.3965L77.043 13.6475L75.6787 16H66.8916L58.0078 0.595703H65.624L71.9727 11.5957H73.251L66.8916 0.595703H74.0459L77.043 5.79492Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute right-[20px] top-[20px] w-[160px] rounded-[6px] border-[1px] border-[#333232]">
          <img
            width={160}
            height={140}
            src="./img/Clothes/Longsleeves/Longsleeve-Front-black.png"
            alt=""
          />
          <div className="p-[15px] pt-[6px]">
            <p className="text-[10px]">DISPLASES Hoodie SHTRIH in Gray</p>
            <div className="flex mt-[8px] gap-[5px]">
              <p className="text-[10px]">12 300р</p>
              <p className="text-[#717171] line-through text-[10px]">15 500р</p>
            </div>
          </div>
        </div>
        <div className="mb-[20px] flex justify-center items-center">
          <button
            className={`uppercase absolute z-[15] bottom-[25px] cursor-pointer bg-[#333232] w-[103px] py-[8px] rounded-[6px] text-[12px] ${style.btn}`}>
            MORE
          </button>
        </div>
        <img
          width={350}
          className="absolute right-0 bottom-0 rounded-[12px]"
          src="./img/elipse-gray.png"
          alt="elipse"
        />
      </div>
    </>
  );
}
