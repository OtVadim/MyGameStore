import React from "react";
import { useSelector } from "react-redux/es/exports";
import './cart-block.css';
import { BiCartAlt } from 'react-icons/bi';
import { cartMenu } from '../cart-menu';

export const CartBlock = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0);
    return (
        <div className="cart-block">
            <BiCartAlt size={25} className="cart-block__icon"/>
            <span className="cart-block__total-price"> {totalPrice} руб. </span>
        </div>
    )
}