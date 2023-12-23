import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryBurger() {
  return (
    <div className={`ml-[50px] gap-[15px] mb-[15px]`}>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Все</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Верхняя одежда</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Лонгсливы</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Толстовки</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Футболки</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Штаны</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Шорты</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Сумки</button>
      </Link>
      <Link to='/category'>
        <button className='text-[#fff] p-[8px] min-w-[115px] rounded-[6px] text-[16px] text-left'>Аксессуары</button>
      </Link>
    </div>
  )
}
