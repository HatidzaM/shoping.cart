import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img
          src={require("../../assets/images/logo.png")}
          alt="logo"
          className="logo"
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
          <ShoppingCartIcon className="cartIcon" fontSize="large" />
        </NavLink>
      </div>
    </header>
  );
}
