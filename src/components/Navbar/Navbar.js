import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppContext } from "../../context/AppContext";

export default function Navbar() {
  const { cart } = useContext(AppContext);
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img
          src={require("../../assets/images/mojlogo.png")}
          alt="mojlogo"
          className="mojlogo"
        />
      </NavLink>
      <div className="links">
      <NavLink
          to={"/sale"}
          className={({ isActive }) =>
            isActive ? "activeStyles sale" : "classicStyles sale"
          }
          style={{marginTop:"8px"}}
        >
          <h2>ON SALE</h2>
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
          style={{marginTop:"8px"}}
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          {/* <ShoppingCartIcon className="cartIcon" fontSize="large" /> */}
          {cart.length ? (
            <div className="cart-icon-container">
              <div className="cart-icon">
                <p style={{ color: "#fff" }}>{cart.length}</p>
              </div>
              <ShoppingCartIcon
                className="cartIcon"
                fontSize="large"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ) : (
            <div className="cart-icon-container">
              <ShoppingCartIcon
                className="cartIcon"
                fontSize="large"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </NavLink>
      </div>
    </header>
  );
}