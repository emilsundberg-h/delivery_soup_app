
import React, { useState, useEffect, FormEvent } from "react";
import "./Delivery.css";
import {  useHistory } from "react-router-dom";


const Delivery = (props) => {
  const [time, setTime] = useState(props.initialValues.time);
  const [address, setAddress] = useState(props.initialValues.address);
  const [name, setName] = useState(props.initialValues.name);
  const [phone, setPhone] = useState(props.initialValues.phone);  
   let history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let form = {
      time: time,
      name: name,
      phone: phone,
      address: address,
    };

    localStorage.setItem('address', JSON.stringify(form));
    props.addressForm(form);
    history.push({
      pathname: "/soup",
      search: "",
    });
  }

const choseTime= (e, time) => {
e.preventDefault();
setTime(time);
}
  return (
    <section className="page">
      <form onSubmit={handleSubmit}>
        <div className="deliveryDiv">
          <p className="deliveryP">When do you want to receive your food?</p>
          <div className="timeDiv">
            <button
              className="timeB"
              type="button"
              onClick={(e) => choseTime(e, "16.00-16-20")}
            >
              16.00-16-20
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "16.20-16.40")}
            >
              16.20-16.40
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "16.40-17.00")}
            >
              16.40-17.00
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "17.00-17.20")}
            >
              17.00-17.20
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "17.20-17.40")}
            >
              17.20-17.40
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "17.40-18.00")}
            >
              17.40-18.00
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "18.00-18.20")}
            >
              18.00-18.20
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "18.20-18.40")}
            >
              18.20-18.40
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "18.40-19.00")}
            >
              18.40-19.00
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "19.00-19.20")}
            >
              19.00-19.20
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "19.20-19.40")}
            >
              19.20-19.40
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "19.40-20.00")}
            >
              19.40-20.00
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "20.00-20.20")}
            >
              20.00-20.20
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "20.20-20.40")}
            >
              20.20-20.40
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "20.40-21.00")}
            >
              20.40-21.00
            </button>
            <button
              type="submit"
              className="timeB"
              onClick={(e) => choseTime(e, "21.00-21.20")}
            >
              21.00-21.20
            </button>
          </div>
        </div>
        <hr className="adressHr"></hr>
        <div className="adressDiv">
          <p className="adressP">Delivery adress</p>
          <div className="inputDiv">
            <input
              type=""
              className="adressI"
              placeholder="NAME"
              value={name}
              onChange={(x) => setName(x.target.value)}
            ></input>
            <input
              type=""
              className="adressI"
              placeholder="PHONE"
              value={phone}
              onChange={(x) => setPhone(x.target.value)}
            ></input>
            <input
              type=""
              className="adressI"
              placeholder="ADDRESS"
              value={address}
              onChange={(x) => setAddress(x.target.value)}
            ></input>
            <input type="" className="adressI" placeholder="FLOOR"></input>
            <input
              type=""
              className="adressI"
              placeholder="PORT CODE"
            ></input>
          </div>
          {/* <hr className="inputHr"></hr> */}

          <button className="cancelB">CANCEL</button>
          <button type="" className="confirmB">
            CONFIRM
          </button>

        </div>
      </form>
    </section>
  );
};

export default Delivery;
