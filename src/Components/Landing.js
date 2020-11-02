import React, { useState, useEffect } from "react";
import './Landing.css';
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <section className="page">
      <div className="landingDiv">
        <p className="heyP">Hey!</p>
        <p className="whatP">What'</p>
        <p className="soupP">S-oup?</p>
        <div className="forWhoDiv">
          <Link to="/delivery">
            <button className="forWhoLink">FOR YOU</button>
          </Link>
          <button className="forWho">FOR A FRIEND</button>
          <button className="forWho">RECIVE GIFT</button>
        </div>
      </div>
      <hr className="aboutUsHr"></hr>

      <div className="aboutUsDiv">
        <p className="whyP">Why</p>
        <p className="what2P">What'</p>
        <p className="soup2P">S-oup?</p>
        <p className="aboutUsP">
          <b>Sustainability</b> - we think it's important! So important that we
          work with it at all levels. From a small <b>seed</b> that germinates
          the soil, the <b>double climate compensation</b> of our emissions, the
          <b> climate-smart packaging</b> we deliver the food in, the use of
          only
          <b> electric cars</b> and <b>bicycles</b>, to{" "}
          <b>collective agreements</b> with all our staff. We prepare all food
          and it is completely <b>organic</b>. We try our best to support the
          use of <b>local ingredients</b>. Our prices <b>include delivery</b>.
          So why not <b>support</b> this with a soup for you or a <b>friend</b>{" "}
          , because your consideration with a soup from us is a{" "}
          <b>very nice consideration!</b>
        </p>
      </div>
    </section>
  );
};

export default Landing;

