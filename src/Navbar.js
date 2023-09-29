import React, { useContext } from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AppContext } from "./AppContextTracker";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {cartItemsCnt} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <img src="./hut.png" alt="hi"></img>
      <navbar>
        <div className="header-left">
            <span onClick={()=>{
              navigate('/');
            }}>Home</span>
            <div className="notification-container">
              <span>{cartItemsCnt}</span>
              <AiOutlineShoppingCart onClick={()=>{
                navigate('/gotocart');
              }}></AiOutlineShoppingCart>
            </div>
        </div>
      </navbar>

    </div>
  )
};

export default Navbar;
