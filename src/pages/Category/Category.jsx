import { Link } from 'react-router-dom';
import './Category.css';

import Product from '../../components/Product';

export default function Category() {
  return (
    <div className=" bg-gray-main rounded-[6px] w-full max-w-[1160px] mx-auto px-[20px] py-3">
      <div className="flex flex-wrap gap-[15px] items-center place-content-between mb-[15px]">
        <div className={`flex back`}>
          <Link to="/">
            <button
              className={`h-[40px] uppercase text-[12px] bg-[#333232] rounded-[6px] flex items-center justify-center w-[103px] pt-[12px] pb-[10px]`}>
              <img className="mr-[4px]" src="./img/icons/chevron-left.svg" alt="arrow" />
              BACK
            </button>
          </Link>
        </div>
        <div className={`flex title`}>
          <h2 className="text-[28px]">Толстовки</h2>
        </div>
        <div className={`flex filterr relative`}>
          <button
            className={`h-[40px] uppercase text-[12px] bg-[#333232] rounded-[6px] flex items-center justify-center w-[103px] pt-[12px] pb-[10px]`}>
            ФИЛЬТРЫ
            <img className="ml-[4px]" src="./img/icons/chevron-right.svg" alt="arrow" />
          </button>
          <div className='absolute flex justify-between max-w-[150px] w-full bg-gray-main px-[12px] py-[10px]'>
              <div className='flex'>
                <p>Цена</p>
                <img src="./img/icons/chevron-right.svg" alt="arrow" />
              </div>
          </div>
        </div>
      </div>
      <div className={`grid gap-[10px] wrapper`}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
