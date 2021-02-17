import "./App.css";
import { Component } from "react";
import Buttons from "./buttons";

class App extends Component {
  state = { number1: "", number2: "", result: "0" };

  setnum1 = (event) => {
    this.setState({ number1: event.target.value });
  };
  setnum2 = (event) => {
    this.setState({ number2: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Basic Calculations</p>
        </header>
        <div className="cal">
          Number 1:{" "}
          <input
            className="inputBox"
            onChange={(event) => {
              this.setnum1(event);
            }}
            id="number1"
            type="text"
          />
          Number 2:{" "}
          <input
            className="inputBox"
            onChange={(event) => {
              this.setnum2(event);
            }}
            id="number2"
            type="text"
          />
        </div>

        <Buttons
          num1={this.state.number1}
          num2={this.state.number2}
          result={this.state.result}
        />
      </div>
    );
  }
}

export default App;
