import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PlanetContext, FavContext, FavListContext } from "./planetContext";
import "./App.css";

function Nav() {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);

  return (
    <div>
      <nav>
        <h1>My Project</h1>
        <ul className="Nav-tabs">
          <Link to="/planets" id="tabStyle">
            <li>PlanetList : {items.length}</li>
          </Link>
          <Link to="/favouritelist" id="tabStyle">
            <li>My Favourites : {listOfFav.length} </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
