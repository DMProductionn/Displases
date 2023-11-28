import React from 'react'
import './Category.css'

export default function Category() {
  return (
    <div className={`flex flex-wrap gap-[15px] justify-center mb-[15px]`}>
        <button className='p-[8px] min-w-[132px] bg-gray-main rounded-[6px] text-gray-text'>Верхняя одежда</button>
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
