import React, { useState, useEffect } from "react";
import "./Soup.css";
import soupItems from "../../constants/soups.js";
import Modal from "react-modal";
import Souppopup from "./Souppopup";
import { Navigation } from "../../Navigation";
import { CheckoutNavigation } from "../../Navigation";

Modal.setAppElement("#root");

const Soup = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSoup, setSelectedSoup] = useState(true);

  const listSoupItems = soupItems.map((el) => (
    <figure className="foodContext" key={el.id}>
      <img
        className="foodImage"
        src={`/images/soup/${el.image}.jpg`}
        alt={el.image}
      />
      <div className="foodContext">
        <div className="transparentBlock"></div>

        <div className="sa"></div>
        <div className="foodName">
          <p className="foodName2">{`${el.name}`}</p>
          <button
            className="foodAdd"
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
        <Souppopup
          onCloseClick={() => setModalIsOpen(false)}
          onAddToCart={(quantity, removedItems) =>
            props.addToCart(selectedSoup, quantity, removedItems)
          }
          soup={selectedSoup}
          isOpen={modalIsOpen}
        />
      ) : null}
      <section className="menuHat">
        <div className="catagory"></div>
        <CheckoutNavigation className="checkoutTitle"></CheckoutNavigation>

        {/* 
            <button className="sb-3" onClick={() => goProtein()}>
              NEXT
            </button> */}
        <div className="titlePrice">
          <p className="catagoryTitle">Soup</p>
          <p className="catagoryPrice">/ 50 SEK</p>
        </div>
        <div className="menu">
          <Navigation className="menuTitle" />
        </div>
        <hr className="menuHr" />

      </section>
      <div>{listSoupItems}</div>
    </div>
  );
};

export default Soup;
