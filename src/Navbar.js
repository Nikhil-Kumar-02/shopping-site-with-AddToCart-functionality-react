import React from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src="./hut.png" alt="hi"></img>
      <navbar>
        <div className="header-left">
            <span>Home</span>
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </div>
      </navbar>

    </div>
  )
};

export default Navbar;
