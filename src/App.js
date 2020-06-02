import React from "react";
import "./App.css";
import Nav from "./Nav";
import Planets from "./tabs/tab1";
import FovouriteList from "./tabs/tab2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Planets />
      <FovouriteList />
    </div>
  );
}

export default App;
