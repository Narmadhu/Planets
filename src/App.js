import React from "react";
import "./App.css";
import Nav from "./Nav";
import Planets from "./tabs/tab1";
import FovouriteList from "./tabs/tab2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/favouriteList" component={FovouriteList} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default App;
