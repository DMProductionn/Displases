import { Link } from 'react-router-dom';
import './Category.css';

import Product from '../../components/Product';
import Filter from '../../components/Filter';
import BackBtn from '../../components/BackBtn';

export default function Category() {
  return (
    <div className=" bg-gray-main rounded-[6px] w-full max-w-[1160px] mx-auto px-[20px] py-3">
      <div className="flex flex-wrap gap-[15px] items-center place-content-between mb-[15px]">
        <div className={`flex back`}>
          <BackBtn />
        </div>
        <div className={`flex title`}>
          <h2 className="text-[18px] sm:text-[24px] font-Floripa">Толстовки</h2>
        </div>
        <Filter />
      </div>
      <div className={`grid gap-[10px] wrapper`}>
        <Link to="/view">
          <Product />
        </Link>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
