import React from "react";

const Slot = (props) => {
  // var x =" 😃";
  // var y = "😃";
  // var z = "😃";
  // let x =props.x ;
  // let y= props.y;
  // let z=props.z;

  let { x, y, z } = props;
  if (x === y && y === z) {
    return (
      <>
        <h1 className="heading-style">
          🎰 Welcome to{" "}
          <span style={{ fontWeight: " bold" }}>Slot Machine Game</span> 🎰{" "}
        </h1>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is not Matching.</h1>
          <hr />
        </div>
      </>
    );
  }
};
export default Slot;
