import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PlanetContext, FavContext, FavListContext } from "./planetContext";

function Nav() {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);

  const tabStyle = {
    color: "black",
  };
  return (
    <div>
      <nav>
        <h1>My Project</h1>
        <ul className="Nav-tabs">
          <Link to="/planets" style={tabStyle}>
            <li>PlanetList:{items.length}</li>
          </Link>
          <Link to="/favouritelist" style={tabStyle}>
            <li>My Favourites:{listOfFav.length} </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
