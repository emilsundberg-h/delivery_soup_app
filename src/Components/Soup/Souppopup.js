import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Souppopup.css";
import MultiSelect from "react-multi-select-component";

function PopUp(props) {
  const ingredients = props.soup.description.split(",");
  const [removedItems, setRemovedItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  let options = ingredients.map((ingredient) => {
    return { label: ingredient, value: ingredient };
  });
  const title = { selectSomeItems: "REMOVE INGREDIENTS" };
  return (
    <div>
      <Modal
        closeTimeoutMS={2000}
        className="modal"
        isOpen={true}
        key={props.soup.id}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0);",
            width: "430px",
          },
        }}
      >
        <hr className="modalHr" />
        <div className="backis">
          <p className="headerP">{props.soup.name}</p>
          <div className="descriptionDiv">
            <p className="descriptionP">{props.soup.description}</p>
          </div>
          <div className="weightDiv"></div>
          <p className="weightP">
            {props.soup.weight}
            {` = `}
            {props.soup.carb}
          </p>
          <div className="closeDiv">
            <button className="closeButton" onClick={props.onCloseClick}>
              x
            </button>
          </div>

          <MultiSelect
            options={options}
            value={removedItems}
            onChange={setRemovedItems}
            labelledBy={"Select"}
            disableSearch="false"
            overrideStrings={title}
          />
          <div className="selectAddDiv">
            <button className="cancelB3" onClick={props.onCloseClick}>
              CANCEL
            </button>
            <select
              className="addSelect"
              onChange={(x) => setQuantity(x.target.value)}
            >
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
              className="addB"
              onClick={() => {
                props.onAddToCart(quantity, removedItems);
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
