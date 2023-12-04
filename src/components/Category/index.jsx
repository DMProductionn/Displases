import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryBtn.css'

export default function CategoryBtn() {
  return (
    <div className={`categoryWrapper hidden flex-wrap justify-between mb-[15px]`}>
       <Link to='/category'><button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Верхняя одежда</button></Link>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Лонгсливы</button>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Толстовки</button>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Футболки</button>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Штаны</button>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Шорты</button>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Сумки</button>  
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Аксессуары</button>
    </div>
  )
}
