import React, { useContext } from "react";
import "./CartCards.css";
import DeleteButton from "../Button/DeleteButton";
import { AppContext } from "../../context/AppContext";

export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  quantity,
}) {
  const { deleteFromCart, increase, decrease } = useContext(AppContext);

  return (
    <div className="cart-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-details">
        <h2 className="productName">Product: {productName}</h2>
        <p className="productPrice">Price: {productPrice * quantity}$</p>
        <div className="details2">
        <p className="product-quantity">Quantity: {quantity}</p>
        <button
          onClick={() => {
            decrease(id);
          }}
          style={{ width: 30 }}
        >
          -
        </button>
        <p></p>
        <button
          onClick={() => {
            increase(id);
          }}
          style={{ width: 30, fontWeight:"400"}}
        >
          +
        </button>
        </div>
        <div>
          <DeleteButton style={{position:"relative", left:"-110px"}}
            onDelete={() => {
              deleteFromCart(id);
            }}
          />
        </div>
        {/* <button
          onClick={() => {
            decrease(id);
          }}
          style={{ width: 30 }}
        >
          -
        </button>
        <p></p>
        <button
          onClick={() => {
            increase(id);
          }}
          style={{ width: 30 }}
        >
          +
        </button> */}
      </div>
    </div>
  );
}
