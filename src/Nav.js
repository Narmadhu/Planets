import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const tabStyle = {
    color: "black",
  };
  return (
    <div>
      <nav>
        <h1>My Project</h1>
        <ul className="Nav-tabs">
          <Link to="/planets" style={tabStyle}>
            <li>PlanetList</li>
          </Link>
          <Link to="/favouritelist" style={tabStyle}>
            <li>My Favourites</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
