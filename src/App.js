import React, { Component } from "react";
import { render } from "@testing-library/react";
import "./index.css";
import Router from './components/Router';
// import { Router } from "@mui/icons-material";

//import Accordion from "./ReactChallangesCom/Accordion/Accordion";
//import Increment from "./ReactChallangesCom/Increment"
 import Hooks from "./ReactChallangesCom/Hooks";
// import Slot from "./ReactChallangesCom/Slot";
// import Spread from './ReactChallangesCom/Todolist'
// import TodoList from "./ReactChallangesCom/Todolist";
// import Message from './components/Message';
// import UseEffect from './components/UseEffect';
// import Calcultor from  './components/Calculator';
//import Web  from './components/Web';
const App = () => {
  return (
    <div className="App">
      {/* <Router /> */}

      {/* <Accordion /> */}
      {/* <Increment /> */}
      <Hooks />
      {/* <TodoList /> */}
      {/* <Spread /> */}
      {/* <Slot  x="😇"  y="😇"  z="😇" />
   <Slot x="😇" y="🐕" z=" 🐈 " />
   <Slot x=" 😻" y="😇" z=" 🔸"/>
   <Slot  x="👪" y="👪" z="👪"/>
   <Slot x="🍎" y = "🍌" z=" 🥭" /> */}

      {/* <Message/> */}
      {/* <UseEffect/> */}
      {/* <Calcultor/> */}
      {/* <Web
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="A Netflix Orignal Series"
        sname="DARK"
        link="https://www.netflix.com/in/title/80990668?source=35"
      />
      <Web
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="A Netflix Orignal Series"
        sname="extra curricular"
        link="https://www.netflix.com/in/title/80990668?source=35"
      />

      <Web
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="A Netflix Orignal Series"
        sname="Stranger things"
        link="https://www.netflix.com/in/title/80990668?source=35"
  /> */
  }
    </div>
  );
};

export default App;
