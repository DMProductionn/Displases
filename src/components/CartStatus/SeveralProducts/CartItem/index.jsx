import React from 'react';
import './CartItem.css';

export default function CartItem() {
  return (
    <div
      className={`border-[1px] min-h-[100px] border-gray-light relative rounded-[6px]`}>
      <img
        className="absolute"
        width={100}
        height={90}
        src="./img/Clothes/Hoodies/Hoodie-gray-front.webp"
        alt="hoodie"
      />
    </div>
  );
}
