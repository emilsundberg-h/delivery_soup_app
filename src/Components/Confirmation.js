import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Confirmation.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";


const Confirmation = (props) => {
  console.log(props);

  return (
    <div>
      <Modal
        closeTimeoutMS={2000}
        className="modal"
        isOpen={props.isOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0);",
            width: "430px",
          },
        }}
      >
        <section className="confirmation">
          <div className="hurrayDiv">
            <p className="hurrayP">Hurray!</p>
            <p className="confirmedP">Your order is confirmed </p>
            <p className="specP">
              {props.formdata.name}, you will recive your order between{" "}
              {props.formdata.time} today. You will get notification 5 minutes
              before we arrive. See you soon at {props.formdata.address}!
              <br />
              <br /> Please check your email for receipt and order details.
            </p>
          </div>
          <hr className="confirmHr"></hr>
          <div className="thanksDiv">
            <p className="thanksP">Thank you!</p>
            <p className="seeyouP">
              With your sustainable choice, we can ensure that both your and the
              planet's health is a priority. You’re great! Hope you will enjoy
              the food and welcome back.
            </p>
            <Link to="/">
              <button className="onceagainB">NEW ORDER</button>
            </Link>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default Confirmation;
