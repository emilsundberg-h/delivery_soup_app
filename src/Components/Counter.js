import React from "react";
import './Counter.css';

const Counter = (props) => {
//   const divStyle = {
//     position: "absolute",
//     top:0,
//     left:0,
//     height: "18x",
//     width: "10px",
//     border: "2px solid #000000",
//     background: '#ffffff',
//     boxSizing: "border-box",
//     borderRadius: "5px",
//     marginBottom: '-1px',
//     margin: "0px",
//     textAlign: "right",
//     fontSize: "14px",
//     fontFamily: "Roboto, sans-serif",
//     fontWeight: "700",
//     zIndex:1000

//   };
//   const pStyle = {

//     fontSize: "12px",
//     fontFamily: "Roboto",
//     fontWeight: '700',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     width: '10px',
//     marginTop: '-20px',
//     textAlign: 'center',
//     // left: "-7px",
//     // top: "-32px",
//   };
console.log(Number(props.quantity));
  return (
    <div>
      {props.quantity || props.quantity > 0 ? (
        <div className="counterDiv" id="counter">
          <p className="counterP">
            {+props.quantity}
          </p>
        </div>
      ) : null}
    </div>
  );
};

    export default Counter;