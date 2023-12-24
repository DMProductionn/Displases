import BackBtn from '../../Buttons/BackBtn';
import CartItem from './CartItem';

import { removeAll } from '../../redux/Slices/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SeveralProducts() {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.Cart)

  return (
    <div className="bg-gray-main rounded-[6px] p-[20px] w-full">
      <div className="flex flex-wrap justify-between gap-[10px]">
        <div>
          <BackBtn />
        </div>
        <div>
          <p className="uppercase  m-auto text-[22px] font-Floripa">Корзина</p>
        </div>
        <div className='w-[103px] h-auto'></div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[15px]">
        {
          cart.map(el => (
              <CartItem {...el} key={el.id}/>
          ))
        }
      </div>
      <div className="flex flex-nowrap flex-col p-[20px] gap-[15px]">
        <p className='text-white text-[16px] font-[400] leading-[125%]'>Итого: {cart.length} товара</p>
        <div className="flex flex-col gap-[5px] justify-center">
          <p className='text-white text-[16px] font-[400] leading-[125%]'>₽</p>
          <p className='text-[#929192] text-[12px] font-[400] leading-[110%] line-through'>15&nbsp;500₽</p>
        </div>
      </div>
      <div className="flex gap-[10px] w-full justify-between">
          <button className="uppercase bg-red w-full h-[40px] text-[10px] 3sm:text-[14px] font-[700] rounded-[6px] flex justify-center items-center">
            ОФОРМИТЬ ЗАКАЗ
          </button>
          <button onClick={() => dispatch(removeAll())} className="uppercase bg-gray-light w-full h-[40px] text-[10px] 3sm:text-[14px] font-[400] rounded-[6px] flex justify-center items-center">
            ОЧИСТИТЬ КОРЗИНУ
          </button>
      </div>
    </div>
  );
}
