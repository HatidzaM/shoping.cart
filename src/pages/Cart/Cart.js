import React from "react";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AppContext } from "../../context/AppContext";
import CartCards from "../../components/CartCards/CartCards";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="cartCards">
          {/* <h1 style={{ textAlign: "center", borderBottom: "1px solid green" }}>
            Your cart
          </h1> */}
          {cart.map((product) => (
            <CartCards
              key={product.id}
              id={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={product.price}
              quantity={product.quantityInCart}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="prazno"></div>
          <IconButton className="dgmzaprd"
            style={{
            marginTop: "-50px",
            position: "relative",
            top: "-50px",
            backgroundColor: "#3bf631ae",
            borderRadius: "5px",
            }}
            color=""
            aria-label="add to shopping cart"
          >
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "700",
              }}
              href="products"
            > Go shopping
            </a>
            <AddShoppingCartIcon style={{color:"black"}} />
          </IconButton>
        </div>
      )}
    </>
  );
}
