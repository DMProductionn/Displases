import './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove, plus } from '../../../redux/Slices/Cart';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CartItem({id, quantity, size}) {
  const { cart } = useSelector(state => state.Cart)
  const [item, setItem] = useState('')
  const obj = {
    id,
    quantity,
    size,
  }
  useEffect(() => {
    axios
      .get(`https://657f17219d10ccb465d5edfb.mockapi.io/items/${id}`)
      .then(resolve => setItem(resolve.data))
      .catch(console.error)
  }, [id])

  const dispatch = useDispatch()
  return (

    <div className='flex justify-between border-[1px] min-h-[120px] border-gray-light rounded-[6px] gap-[20px]'>

      <div className="flex justify-between w-full py-[10px] pl-[10px]"> {/* Инфо  */}
        <div className="flex items-center content-center gap-[20px] flex-wrap"> {/*элемент */}
          <img
            width={100}
            height={90}
            src={item.imgFront}
            alt="hoodie"
          />
        
          <div className="flex items-start flex-col min-w-[160px]">
            <div className="">
              <p className='text-white text-[16px] font-[400] uppercase leading-[125%]'>DISPLASES Longsleeve <br /> {item.title}</p>
              <p className='text-[#F64343] text-[16px] font-[700] leading-[125%]'>-20%</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <p className='text-white text-[16px] font-[400] leading-[125%]'>Количество: {quantity}</p>
            <button onClick={() => dispatch(plus(id))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15 14C15 14.5523 14.5523 15 14 15L2 15C1.44772 15 0.999999 14.5523 0.999999 14L1 2C1 1.44771 1.44772 0.999999 2 0.999999L14 1C14.5523 1 15 1.44772 15 2L15 14ZM16 2C16 0.895431 15.1046 -3.91405e-08 14 -8.74228e-08L2 -6.11959e-07C0.895431 -6.60242e-07 -3.91405e-08 0.89543 -8.74228e-08 2L-6.11959e-07 14C-6.60242e-07 15.1046 0.89543 16 2 16L14 16C15.1046 16 16 15.1046 16 14L16 2Z" fill="white" />
                <path d="M3.54389 10.2048C3.62455 10.3844 3.80311 10.5 4.00001 10.5L12 10.5C12.1969 10.5 12.3755 10.3844 12.4561 10.2048C12.5368 10.0252 12.5045 9.81498 12.3737 9.66782L8.37371 5.16782C8.27883 5.06107 8.14283 5 8.00001 5C7.85719 5 7.72119 5.06107 7.6263 5.16782L3.6263 9.66782C3.49549 9.81498 3.46323 10.0252 3.54389 10.2048Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] justify-center"> {/* Цена  */}
          <p className='text-white text-right text-[16px] font-[400] leading-[125%]'>{item.price}₽</p>
          <p className='text-[#717171] text-right text-[12px] font-[400] leading-[110%] line-through'>{item.discount}₽</p>
        </div>
      </div>
      {/* Корзина */}
      <button onClick={() => dispatch(remove(obj))} className='min-h-[120px] rounded-r-[6px] bg-[#333232] px-[20px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.125 1.25C2.43464 1.25 1.875 1.80964 1.875 2.5V3.75C1.875 4.44036 2.43464 5 3.125 5H3.75V16.25C3.75 17.6307 4.86929 18.75 6.25 18.75H13.75C15.1307 18.75 16.25 17.6307 16.25 16.25V5H16.875C17.5654 5 18.125 4.44036 18.125 3.75V2.5C18.125 1.80964 17.5654 1.25 16.875 1.25H12.5C12.5 0.559644 11.9404 0 11.25 0H8.75C8.05964 0 7.5 0.559644 7.5 1.25H3.125ZM6.875 6.25C7.22018 6.25 7.5 6.52982 7.5 6.875V15.625C7.5 15.9702 7.22018 16.25 6.875 16.25C6.52982 16.25 6.25 15.9702 6.25 15.625L6.25 6.875C6.25 6.52982 6.52982 6.25 6.875 6.25ZM10 6.25C10.3452 6.25 10.625 6.52982 10.625 6.875V15.625C10.625 15.9702 10.3452 16.25 10 16.25C9.65482 16.25 9.375 15.9702 9.375 15.625V6.875C9.375 6.52982 9.65482 6.25 10 6.25ZM13.75 6.875V15.625C13.75 15.9702 13.4702 16.25 13.125 16.25C12.7798 16.25 12.5 15.9702 12.5 15.625V6.875C12.5 6.52982 12.7798 6.25 13.125 6.25C13.4702 6.25 13.75 6.52982 13.75 6.875Z" fill="#F74343" />
        </svg>
      </button>
    </div>
  );
}
