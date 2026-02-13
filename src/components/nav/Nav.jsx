import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
        <div className="top-nav">
            <div className="logo">
                <span>S-Mart</span>
                <FaShopify />
            </div>

            <form className="search-box">
                <input type="text" placeholder='Search Items..'/>
                <button><IoSearchOutline /></button>
            </form>

            <div className="cart-box">
                <LuShoppingCart />
                <span>0</span>
            </div>
        </div>
        <div className="bottom-nav">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
        </div>
    </div>
  )
}

export default Nav
