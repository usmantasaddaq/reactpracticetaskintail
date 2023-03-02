import React from "react";
import { useState } from "react";
import Itemlist from "./Itemlist";

const TodoList = () => {
  const [itemName, setItemName] = useState("");

  const [Items, setItems] = useState([]);

  const InputEvent = (event) => {
    setItemName(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, itemName];
    });
    setItemName("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="Todolist">
        <br />
        <div className="border">
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="add items"
            onChange={InputEvent}
            value={itemName}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li>{itemName}</li> */}
            {Items.map((itemval, index) => {
              return (
                <Itemlist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
