import React, { Component } from "react";

class Card extends Component {
  constructor() {
    
    super(
      (this.state = {
        Card: " Welocome visitor",
      })
    );
  }

  changeMessage() {
    this.setState = {
      Card: "Thank you for subscribing",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.Card}</h1>
        <button onClick={() => this.changeMessage()}> Subscribe</button>
      </div>
    );
  }
}

export default Card;
