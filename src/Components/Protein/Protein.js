import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./Protein.module.css";
import proteinItems from "../../constants/protein.js";
import Modal from "react-modal";
import Proteinpopup from "./Proteinpopup";
import { Navigation } from "../../Navigation";
import { CheckoutNavigation } from "../../Navigation";
import Counter from '../Counter';
import * as ROUTES from "../../constants/routes";
Modal.setAppElement("#root");

const Protein = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSoup, setSelectedSoup] = useState(true);

  const listProteinItems = proteinItems.map((el) => (
    <figure className={classes.foodContext} key={el.id}>
      <img
        className={classes.foodImage}
        src={`/images/protein/${el.image}.jpg`}
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
        <Proteinpopup
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
          <p className={classes.catagoryTitle}>Protein</p>
          <p className={classes.catagoryPrice}>/ 30 SEK</p>
        </div>
        <div className={classes.menu}>
          <Navigation className={classes.menuTitle} />
        </div>
        <hr className={classes.menuHr} />
        <Counter />
        {/* {props.quantity || props.quantity > 0 ? (
          <div style={divStyle}>
            <p style={pStyle} className="counter">
              {props.quantity}
            </p>
          </div>
        ) : null} */}
      </section>
      <div>{listProteinItems}</div>
    </div>
  );
};

export default Protein;
