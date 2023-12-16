import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSkeleton } from '../components/redux/Slices/Category';
import Product from '../components/Product';
import Filter from '../components/Buttons/FilterBtn';
import BackBtn from '../components/Buttons/BackBtn';
import NotFound from '../components/NotFound';
import Skeleton from '../components/Skeleton';


export default function Sale() {
  const dispatch = useDispatch()
  const { sale, selectCategory, categoryBtn, skeleton } = useSelector((state) => state.Category);

  // все товары
  const [item, setItem] = useState([]);

  // сортировка sale
  const saleUrl = sale === true ? `sale=true` : '';

  // сортировка категории

  const categoryUrl = categoryBtn === 0 ? '' : `category=${selectCategory}` 


  useEffect(() => {
    dispatch(setSkeleton(true));
    axios.get(`https://65707bc209586eff66417bbf.mockapi.io/item?${saleUrl}&${categoryUrl}`).then((res) => {
      setTimeout(() => {
        dispatch(setSkeleton(false));
      }, "1000");
      setItem(res.data);
    });
  }, [saleUrl, categoryUrl]);

  return (
    <div className=" bg-gray-main rounded-[6px] px-[20px] py-3 min-h-[600px]">
      <div className="flex flex-wrap gap-[15px] items-center place-content-between mb-[15px]">
        <div className={`flex back`}>
          <BackBtn />
        </div>
        <div className={`flex title items-center`}>
        <div className={`flex items-center justify-center h-[30px] pl-[20px] gap-[8px]`}>
          <h2 className='text-[18px] sm:text-[24px] font-Floripa ml-[43px] leading-[90%]'>SALE</h2>
          <p className={`text-[#F64343] text-[18px] sm:text-[24px] font-[700] leading-[110%] mb-[5px]`}>-20%</p>
        </div>
        </div>
        <Filter />
      </div>
      <div className={`grid gap-[10px] wrapper relative`}>
        {skeleton ? <Skeleton count={6} /> : item.length == 0 ? <NotFound /> : item.map((obj, index) => (
          <Link key={index} to="/view">
            <Product
              key={obj.id}
              img={obj.img}
              title={obj.title}
              price={obj.price}
              discount={obj.discount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
