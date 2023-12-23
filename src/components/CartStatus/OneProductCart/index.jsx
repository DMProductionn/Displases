import style from './OneProductCart.module.css';
import BackBtn from '../../Buttons/BackBtn';

import { plus, removeAll } from '../../redux/Slices/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OneProductCart() {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.Cart)
  const element = Object.keys(cart)[0]
  const quantity = cart[element]
  const [ item, setItem ] = useState('')

  const price = item.price * quantity
  const discount = item.discount * quantity

  useEffect(() => {
    axios
      .get(`https://657f17219d10ccb465d5edfb.mockapi.io/items/${element}`)
      .then(resolve => setItem(resolve.data))
      .catch(console.error)
  }, [])

  return (
    <div className="bg-gray-main rounded-[6px] p-[20px]">
      <div className="flex flex-wrap justify-between gap-[10px]">
        <div>
          <BackBtn />
        </div>
        <div>
          <p className="uppercase  m-auto text-[22px] font-Floripa">Корзина</p>
        </div>
        <div className='w-[103px] h-auto'></div>
      </div>
      <div className="flex gap-[10px] mt-[15px] mb-[40px] flex-wrap">
        <div
          className={`${style.hoodieBig} flex justify-center border-[1px] border-gray-light w-full max-w-[820px] mb-[12px] rounded-[6px] h-[480px]`}>
          <img
            className="p-[20px]"
            src={item.imgFront}
            alt="hoodie"
          />
        </div>
        <div className={`${style.hoodieSmallWrapper} gap-[10px] flex flex-col`}>
          <div
            className={`${style.hoodieSmallBlock} p-[20px] w-[300px] h-[235px] border-[1px] border-gray-light rounded-[6px] flex justify-center`}>
            <img
              className={`${style.hoodieSmall} h-[200px]`}
              src={item.imgFront}
              alt="hoodie"
            />
          </div>
          <div
            className={`${style.hoodieSmallBlock} p-[20px] w-[300px] h-[235px] border-[1px] border-gray-light rounded-[6px] flex justify-center`}>
            <img
              className={`${style.hoodieSmall} ${style.hoodieSmall} h-[200px]`}
              src={item.imgBack}
              alt="hoodie"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[24px] 3sm:text-[30px] font-[700] leading-[125%]">DISPLASES Hoodie</p>
        <div className="flex gap-[25px] items-center mb-[25px] flex-wrap">
          <p className="text-[24px] 3sm:text-[30px] font-[700] leading-[125%]">
            {item.title} <span>(L)</span>
          </p>
          <div className="flex gap-[10px] items-center flex-wrap">
            <p className="text-[22px] leading-[100%]">
              Количество: <span>{quantity}</span>
            </p>
            <button className="w-[16px] h-[16px]" onClick={() => dispatch(plus(element))}>
              <img src="./img/icons/caret-square.svg" alt="caret" />
            </button>
          </div>
          <p className="text-[#F64343] text-[22px] leading-[99%]">-20%</p>
        </div>
        <div className="flex mb-[20px] gap-[8px]">
          <p className="text-[22px] leading-[110%]">{price}р</p>
          <p className="text-[#717171] line-through text-[22px] leading-[110%]">{discount}р</p>
        </div>
        <div className="flex gap-[10px]">
          <button className="uppercase bg-red w-full h-[40px] text-[10px] 3sm:text-[14px] font-[700] rounded-[6px] flex justify-center items-center">
            ОФОРМИТЬ ЗАКАЗ
          </button>
          <button onClick={() => dispatch(removeAll())} className="uppercase bg-gray-light w-full h-[40px] text-[10px] 3sm:text-[14px] font-[400] rounded-[6px] flex justify-center items-center">
            ОЧИСТИТЬ КОРЗИНУ
          </button>
        </div>
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div>
            <p className="text-[12px]">Ткань: футер 3-х нитка 340гр</p>
            <p className="text-[12px]">Лекала: умеренный оверсайз</p>
            <p className="text-[12px]">Нанесение: тафтинг</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">договор оферты</a>
              </li>
              <li>
                <a href="#">политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">заявление на возврат</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
