import React from 'react';
import style from './SizeBtn.module.css'
import { setSize } from '../../redux/Slices/Size.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function SizeBtn() {
  const dispatch = useDispatch()
  const { sizeBtn } = useSelector(state => state.Size)



  return (
    <>
      <button
      onClick={() => dispatch(setSize())}
        className={sizeBtn ? `${style.active} ${style.sizeBtn}` : `${style.sizeBtn}`}>
        РАЗМЕР
        <svg
          className={sizeBtn ? `${style.arrowFilterSvg} ${style.active}` : `${style.arrowFilterSvg} ml-[4px]`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            className={sizeBtn ? `${style.active}` : ''}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z"
            fill="#fff"
          />
        </svg>
      </button>

      <div
        className={sizeBtn ? `${style.price} ${style.active}` : `${style.price}`}>
        <ul className="flex flex-col">
          <li className=''>
            <button className='pl-[12px] py-[6px] text-[12px]'>S</button>
          </li>
          <li className='bg-[#333232]'>
            <button className='pl-[12px] py-[6px] text-[12px]'>L</button>
          </li>
          <li>
            <button className='pl-[12px] py-[6px] text-[12px]'>M</button>
          </li>
          <li>
            <button className='pl-[12px] py-[6px] text-[12px]'>XL</button>
          </li>
          <li>
            <button className='pl-[12px] py-[6px] text-[12px]'>XLL</button>
          </li>
        </ul>
      </div>
    </>
  );
}
