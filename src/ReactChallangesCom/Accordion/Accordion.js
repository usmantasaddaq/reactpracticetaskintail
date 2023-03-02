import React, { useState } from "react";
import { questions } from "./Api";
import "./Accordion.css";
import Myaccordion from "./Myaccordion";
const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1>React Interview Question and answer</h1>
        {data.map((cuElem) => {
          const { id } = cuElem;
          return <Myaccordion key={cuElem.id} {...cuElem} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
