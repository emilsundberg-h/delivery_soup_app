import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Cart from '../Cart';
import './Checkout.css';
import Shop from '../../Shop';
import Modal from "react-modal";
import Confirmation from '../Confirmation';
import { Link } from "react-router-dom";
Modal.setAppElement("#root");


const Checkout = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(props.cart);
  return (
    <section className="page">
      <div className="checkoutDiv">
        <p className="checkoutP">Checkout</p>
      </div>
      <hr className="checkoutHr" />
      <div className="addMoreDiv">
        <p className="feelPleased">
          Do you feel pleased or do want something more?
        </p>
        <div className="orderDiv"></div>
        <div className="foodTitleDiv">
          <Link to="/soup">
            <button className="foodTitleButton1">SOUP</button>
          </Link>
          <Link to="/protein">
            <button className="foodTitleButton1">PROTEIN</button>
          </Link>
          <Link to="/extras">
            <button className="foodTitleButton1">EXTRAS</button>
          </Link>
          <Link to="/beverage">
            <button className="foodTitleButton1">BEVERAGE</button>
          </Link>
        </div>
        <hr className="checkoutHr2" />
        <div className="giftDiv">
          {
            <Cart
              cart={props.cart}
              onRemoveItem={(item) => props.onRemoveItem(item)}
            />
          }
        </div>
        <hr className="checkoutHr3" />
        <div className="payDiv">
          <button
            className="payB"
            type="submit"
            value=""
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            PAY
          </button>
          <Confirmation
            onCloseClick={() => setModalIsOpen(false)}
            isOpen={modalIsOpen}
            formdata={props.formdata}
          />
        </div>
      </div>
    </section>
  );
  return
};

export default Checkout;
