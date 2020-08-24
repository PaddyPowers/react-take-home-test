import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "containers/HomePage";
import "./styles.less";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
