import { useEffect, useState } from "react";

import OneProductCart from "../components/CartStatus/OneProductCart";
import ClearCart from "../components/CartStatus/ClearCart";
import SeveralProducts from "../components/CartStatus/SeveralProducts";
import { useDispatch, useSelector } from "react-redux";
import {
    add,
    remove,
    removeAll
} from "../components/redux/Slices/Cart";

export default function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.Cart);
    const length = Object.keys(cart).length

    const [content, setContent] = useState(null);

    console.log(cart);
    // Проверка на кол-во эл-ов в корзине
    useEffect(() => {
        if (!length) {
            setContent(<ClearCart />);
        } else if (length === 1) {
            setContent(<OneProductCart />);
        } else if (length > 1) {
            setContent(<SeveralProducts />);
        }
    }, [cart]);

    return (
      <>
        {content}
      </>
    )
}
