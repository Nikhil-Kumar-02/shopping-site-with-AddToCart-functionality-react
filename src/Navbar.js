import React, { useContext } from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AppContext } from "./AppContextTracker";

const Navbar = () => {
  const {currCartItems} = useContext(AppContext);
  return (
    <div className="navbar-container">
      <img src="./hut.png" alt="hi"></img>
      <navbar>
        <div className="header-left">
            <span>Home</span>
            <div className="notification-container">
              <span>{currCartItems}</span>
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </div>
        </div>
      </navbar>

    </div>
  )
};

export default Navbar;
