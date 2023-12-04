import React from 'react';

import OneProductCart from '../components/CartStatus/OneProductCart';
import ClearCart from '../components/CartStatus/ClearCart'
import SeveralProducts from '../components/CartStatus/SeveralProducts';


export default function Cart() {
  return (
    <>
      <OneProductCart />
      {/* <ClearCart /> */}
      {/* <SeveralProducts /> */}
    </>
  );
}
