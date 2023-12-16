import React from 'react';
import style from './MainBannerNewCol.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNewCol } from '../../redux/Slices/Category';

export default function BannerNewCol() {
  const dispatch = useDispatch()
  const { newCol } = useSelector(state => state.Category)

  const getTrueNewCol = () => {
    dispatch(setNewCol(true))
  }
  console.log(newCol);
  return (
    <>
      <div className={`relative py-[20px] h-[850px] max-w-[570px] rounded-[12px] w-full bg-[#1D1D1D] ${style.mainBlock}`}>
        <div className="flex items-center h-[30px] pl-[20px]">
          <h3 className='font-Floripa w-[50px] text-[22px] pt-[20px]'>NEW COLLECTION</h3>
        </div>
        {/* карточка баннера */}
        <Link to='/view'>
        <div className="cursor-pointer absolute right-[20px] top-[20px] w-[160px] rounded-[6px] border-[1px] border-[#333232]">
          <img
            width={160}
            height={140}
            src="./img/Clothes/Longsleeves/Longsleeve-Front-black.webp"
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
        </Link>
        <div className="mb-[20px] flex justify-center items-center">
          <Link to='/newcol'>
          <button
          onClick={getTrueNewCol}
            className={`uppercase absolute z-[15] bottom-[25px] cursor-pointer bg-[#333232] w-[103px] py-[8px] rounded-[6px] text-[12px] ${style.btn}`}>
            MORE
          </button>
          </Link>
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
