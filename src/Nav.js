import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Nav.css";

function Nav() {
  const quantity = useSelector(state => state.cartQty);
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <NavLink exact to="/" className="shoply-home">Shoply</NavLink>
        <NavLink exact to="/cart" className="cart-stats" data-testid="cart">
        <span className="direction">
          <span className="shopping-cart">
            <svg color="#EEE" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="1.7em" height="1.7em"><path fill="#EEEEEE" d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/>
              <circle fill="#EEEEEE" cx="7" cy="22" r="2"/>
              <circle fill="#EEEEEE" cx="17" cy="22" r="2"/>
            </svg>
            <span className="quantity">{quantity}</span>
          </span> 
          <br/>
        </span>
        </NavLink>

      </nav>
    </div>
  );

}

export default Nav;