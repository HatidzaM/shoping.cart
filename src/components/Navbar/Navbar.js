import React from "react";
import "./Navbar.css"; 
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
    <header className="navbar">
        <NavLink to={"/"}> <img src={logo} alt="logo" className="logo"/> </NavLink>
        <div className="links">
            <NavLink to={"/products"}><h2>PRODUCTS</h2></NavLink>
            <NavLink to={"/cart"}><h2>CART</h2></NavLink>
        </div>
    </header>
    )
}
