import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Nav.css";

function Nav() {
  const quantity = useSelector(state => state.cartQty);
  const total = useSelector(state => state.total);
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <NavLink exact to="/" className="shoply-home">Shoply</NavLink>
        <NavLink exact to="/cart" className="cart-stats" data-testid="cart">
          <i className="fa fa-shopping-cart" style={{fontSize: 36}}></i><h4> {quantity} <br/> Total: ${total} <br/> Checkout</h4>
        </NavLink>
      </nav>
    </div>
  );

}

export default Nav;