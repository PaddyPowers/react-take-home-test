import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "containers/HomePage";
import "./styles.less";

// App is the initial page with a Router, seeing as we only have one page now it is simplistic but very easy to expand.

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
