import React from "react";
import "./App.css";
import Nav from "./Nav";
import Planets from "./tabs/tab1";
import FavouriteList from "./tabs/tab2";
import { PlanetProvider, FavProvider, FavListProvider } from "./planetContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <FavProvider>
      <FavListProvider>
        <PlanetProvider>
          <Router>
            <div className="App">
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/planets" component={Planets} />
                <Route path="/favouriteList" component={FavouriteList} />
              </Switch>
            </div>
          </Router>
        </PlanetProvider>
      </FavListProvider>
    </FavProvider>
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
