import React, { useEffect, useState } from "react";

import OneProductCart from "../components/CartStatus/OneProductCart";
import ClearCart from "../components/CartStatus/ClearCart";
import SeveralProducts from "../components/CartStatus/SeveralProducts";
import { useDispatch, useSelector } from "react-redux";
import {
    addElToCart,
    removeElFromCart,
    removeAllCart
} from "../components/redux/Slices/Cart";

export default function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.Cart);

    const [content, setContent] = useState(null);



    // Проверка на кол-во эл-ов в корзине
    useEffect(() => {
        if (!cart.length) {
            setContent(<ClearCart />);
        } else if (cart.length === 1) {
            setContent(<OneProductCart />);
        } else if (cart.length > 1) {
            setContent(<SeveralProducts />);
        }
    }, [cart]);

    return (
      <>
        {content}
        <button onClick={() => dispatch(removeAllCart())}>Clear</button>
        <button onClick={() => dispatch(addElToCart())}>Add 1</button>
      </>
    )
}
