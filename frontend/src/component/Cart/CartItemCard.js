import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md"
const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <MdRemoveShoppingCart className="remove-cart-icon" onClick={() => deleteCartItems(item.product)} />
      </div>
    </div>
  );
};

export default CartItemCard;
