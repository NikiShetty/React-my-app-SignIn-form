import React, { Component } from "react";
import "./App.css";
import AddInfo from "./AddInfo";
 import Display from "./Display";

class App extends Component {
  state = {
    personData: [],
  };

  addInfo = (props) => {
    console.log(props);
    let personData = [...this.state.personData, props];

    this.setState({
      personData,
    });

    console.log(personData);
  };

  render() {
    return (
      <div>

      <AddInfo addInfo={this.addInfo} />
      <Display sendData={this.state.personData} />
      </div>
    );
  }
}

export default App;

