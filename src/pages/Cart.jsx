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
    const some = 'abc'
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.Cart);
    console.log(cart);

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
        <button onClick={() => dispatch(removeAll())}>Clear</button>
        <button onClick={() => dispatch(add(some))}>Add 1</button>
        <button onClick={() => dispatch(remove(some))}>Remove 1</button>
      </>
    )
}
