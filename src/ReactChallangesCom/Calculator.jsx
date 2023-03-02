import React from "react";

function Calc() {
  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return (a / b).toFixed(2);
  }
  

  return (
    <>
      <ul>
        <li>Sum of two no is {add(3, 33)}</li>
        <li>Sub of two no is {sub(12, 4)}</li>
        <li>Div of two no is {div(34, 5)}</li>
        <li>Mul of two no is {mul(2, 4)}</li>
      </ul>
    </>
  );
}

export default Calc;
