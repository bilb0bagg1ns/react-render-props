import React, { Component } from "react";
import "./App.css";
import Amount from "./Amount";

class App extends Component {
  render() {
    return (
      <Amount>
        {amount => (
          <div>
            <Pound amount={amount} />
            <Euro amount={amount} />
          </div>
        )}
      </Amount>
    );
  }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;
export default App;
