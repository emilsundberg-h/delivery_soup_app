import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./Beverage.module.css";
import Checkout from "../Checkout/Checkout";
import beverageItems from "../../constants/beverage.js";
import Modal from "react-modal";
import Beveragepopup from "./Beveragepopup";
import { Navigation } from "../../Navigation";
import * as ROUTES from "../../constants/routes";
// import Counter from '../Counter';
import { CheckoutNavigation } from "../../Navigation";
Modal.setAppElement("#root");

const Beverage = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSoup, setSelectedSoup] = useState(true);

  const listBeverageinItems = beverageItems.map((el) => (
    <figure className={classes.foodContext} key={el.id}>
      <img
        className={classes.foodImage}
        src={`/images/beverage/${el.image}.jpg`}
        alt={el.image}
      />
      <div className={classes.foodContext}>
        <div className={classes.transparentBlock}></div>

        <div className={classes.sa}></div>
        <div className={classes.foodName}>
          <p className={classes.foodName2}>{`${el.name}`}</p>
          <button
            className={classes.foodAdd}
            type="submit"
            value="+"
            onClick={() => {
              setModalIsOpen(true);
              setSelectedSoup(el);
            }}
            id={el.id}
          >
            +
          </button>
        </div>
      </div>
    </figure>
  ));

  const goProtein = () => {
    props.history.push({
      pathname: "/protein",
      search: "",
    });
  };

  return (
    <div>
      {modalIsOpen & (selectedSoup != null) && selectedSoup ? (
        <Beveragepopup
          onCloseClick={() => setModalIsOpen(false)}
          onAddToCart={() => props.addToCart(selectedSoup)}
          soup={selectedSoup}
          isOpen={modalIsOpen}
        />
      ) : null}
      <section className={classes.menuHat}>
        <div className={classes.catagory}></div>
        <CheckoutNavigation
          className={classes.checkoutTitle}
        ></CheckoutNavigation>
        <div className={classes.titlePrice}>
          <p className={classes.catagoryTitle}>Beverage</p>
          <p className={classes.catagoryPrice}>/ 25 SEK</p>
        </div>
        <div className={classes.menu}>
          <Navigation className="menuTitle" />
        </div>
        <hr className={classes.menuHr} />
        {/* <Counter /> */}
      </section>
      <div>{listBeverageinItems}</div>
    </div>
  );
};

export default Beverage;
