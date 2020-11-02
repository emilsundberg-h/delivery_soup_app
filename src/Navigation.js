import React from "react";
import { NavLink, withRouter  } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="menu">
      <NavLink activeClassName="active" to="/soup" className="menuTitle">
        SOUP
      </NavLink>
      <NavLink activeClassName="active" to="/protein" className="menuTitle">
        PROTEIN
      </NavLink>
      <NavLink activeClassName="active" to="/extras" className="menuTitle">
        EXTRAS
      </NavLink>
      <NavLink activeClassName="active" to="/beverage" className="menuTitle">
        BEVERAGE
      </NavLink>
    </div>
  );
};

export const CheckoutNavigation = () => {
  return (
    <div className="checkout">
      <NavLink activeClassName="active" to="/" className="checkoutTitle">
        WHAT´SOUP
      </NavLink>
      <NavLink activeClassName="active" to="/delivery" className="checkoutTitle">
        DELIVERY
      </NavLink>
      <NavLink activeClassName="active" to="/checkout" className="checkoutTitle">
        CHECKOUT
      </NavLink>

    </div>
  );
};

export const GoToSoup = () => {
  return (
    <div className="checkout">
      <NavLink activeClassName="active" to="/soup" className="checkoutTitle">
        CONFIRM
      </NavLink>

    </div>
  );
};