import React, { Component } from "react";
import "./Number.css";

class Number extends Component {
  render() {
    const { number, name } = this.props;
    return (
      <div className="square">
        <div className="number" key={number}>
          {number}
        </div>
        <div className="name" key={name}>
          {name}
        </div>
      </div>
    );
  }
}

export { Number };
