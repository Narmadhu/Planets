import React, { useContext, useState } from "react";
import { PlanetContext, FavContext, FavListContext } from "../planetContext";
import Planets from "./tab1";

function FavouriteList() {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);

  return (
    <div className="favList">
      <ul>
        {listOfFav.map((list) => (
          <li> {list.item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteList;
