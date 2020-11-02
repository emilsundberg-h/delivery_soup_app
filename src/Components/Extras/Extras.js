import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./Extras.module.css";
import Checkout from "../Checkout/Checkout";
import extrasItems from "../../constants/extras.js";
import Modal from "react-modal";
import Extraspopup from "./Extraspopup";
import { Navigation } from "../../Navigation";
import { CheckoutNavigation } from "../../Navigation";
import * as ROUTES from "../../constants/routes";
Modal.setAppElement("#root");

const Extras = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSoup, setSelectedSoup] = useState(true);

  const listExtrasItems = extrasItems.map((el) => (
    <figure className={classes.foodContext2} key={el.id}>
      <img
        className={classes.foodImage2}
        src={`/images/extras/${el.image}.jpg`}
        alt={el.imagepopup}
      />
      <div className={classes.foodContext2}>
        <div className={classes.transparentBlock2}></div>

        <div className={classes.sa2}></div>
        <div className={classes.foodName}>
          <p className={classes.foodName22}>{`${el.name}`}</p>
          <p className={classes.foodName32}>
            {el.weight}
            {` / `}
            {el.price} SEK
          </p>
          <button
            className={classes.foodAdd2}
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
        <Extraspopup
          onCloseClick={() => setModalIsOpen(false)}
          onAddToCart={() => props.addToCart(selectedSoup)}
          soup={selectedSoup}
          isOpen={modalIsOpen}
        />
      ) : null}
      <section className={classes.menuHat2}>
        <div className={classes.catagory2}></div>
        <CheckoutNavigation
          className={classes.checkoutTitle}
        ></CheckoutNavigation>
        <div className={classes.titlePrice2}>
          <p className={classes.catagoryTitle2}>Extras</p>
          <p className={classes.catagoryPrice2}>YUMMIE YUM</p>
        </div>
        <div className={classes.menu}>
          <Navigation className={classes.menuTitle} />
        </div>
        <hr className={classes.menuHr2} />
      </section>
      <div>{listExtrasItems}</div>
    </div>
  );
};

export default Extras;
