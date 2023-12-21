import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSkeleton } from '../../components/redux/Slices/Category';
import Product from '../../components/Product';
import Filter from '../../components/Buttons/FilterBtn';
import BackBtn from '../../components/Buttons/BackBtn';
import './Category.css';
import NotFound from '../../components/NotFound';
import Skeleton from '../../components/Skeleton';
import Search from '../../components/search';


export default function Category() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('item') || ''

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
    axios
      .get(`https://657f17219d10ccb465d5edfb.mockapi.io/items?${saleUrl}&${categoryUrl}`)
      .then((res) => {
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
        <div className={`flex title`}>
          <h2 className="text-[18px] sm:text-[24px] font-Floripa ml-[43px]">{selectCategory}</h2>
        </div>
        <div className="flex flex-nowrap gap-[20px]">
          <Search setSearchParams={setSearchParams} query={query} />
          <Filter />
        </div>
      </div>
      <div className={`grid gap-[10px] wrapper relative`}>
        {
          skeleton ?
            <Skeleton count={6} /> : item.length == 0 ? <NotFound /> :
              item
                .filter(el => el.title.includes(query))
                .map((obj, index) => (
                  <Link key={index} to={`/category/${obj.id}`}>
                    <Product
                      key={obj.id}
                      img={obj.imgFront}
                      title={obj.title}
                      price={obj.price}
                      discount={obj.discount}
                    />
                  </Link>
                ))
        }
      </div>
    </div>
  );
}
// "imgHalf": "/public/img/Clothes/Hoodies/Hoodie-gray-main-half.webp",
// 8     "imgHalf": "./img/Clothes/Longsleeves/Longsleeve-black-main-half.webp",