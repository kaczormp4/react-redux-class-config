import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { incrementNumber, decrementNumber } from "./store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1 className="numberAnimation">{this.props.number}</h1>
        <div>
          <button className="btn" onClick={this.props.incrementNumber}>
            INCREMENT
          </button>
          <button className="btn" onClick={this.props.decrementNumber}>
            DECREMENT
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ numberReducer: number }) => {
  return {
    number,
  };
};

const mapDispatchToProps = {
  incrementNumber,
  decrementNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
