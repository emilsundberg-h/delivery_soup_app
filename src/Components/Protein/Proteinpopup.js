import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import classes from './Proteinpopup.module.css'
import MultiSelect from "react-multi-select-component";



function PopUp (props) {
 
  
  const [selected, setSelected] = useState([]);
    return (
      <div>
        <Modal
          className={classes.modal2}
          isOpen={true}
          key={props.soup.id}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0);",
              width: "430px",
            },
          }}
        >
          <hr className={classes.modalHr2} />
          {/* <img
            className="imagePopup"
            src={`/images/extras/${props.soup.imagepopup}.jpg`}
            alt={props.soup.imagepopup}
          /> */}
          <div className={classes.backis2}>
            <p className={classes.headerP2}>{props.soup.name}</p>
            <div className={classes.descriptionDiv2}>
              <p className={classes.descriptionP2}>{props.soup.description}</p>
            </div>
            <div className={classes.priceDiv2}></div>

            <div className={classes.weightDiv2}></div>
            <p className={classes.weightP2}>
              {props.soup.weight}
              {props.soup.carb}
            </p>
            <div className={classes.closeDiv2}>
              <button
                className={classes.closeButton2}
                onClick={props.onCloseClick}
              >
                x
              </button>
            </div>
            <div className={classes.selectAddDiv2}>
              <button className={classes.cancelB2} onClick={props.onCloseClick}>
                CANCEL
              </button>
              <select className={classes.addSelect2}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="0">0</option>
              </select>
              <button
                className={classes.addB2}
                onClick={() => {
                  props.onAddToCart();
                  props.onCloseClick();
                }}
              >
                ADD
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
}
export default PopUp;