import React, { useContext, useState } from "react";
import { PlanetContext, FavContext, FavListContext } from "../planetContext";
import Planets from "./tab1";

function FavouriteList() {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);

  return (
    <div>
      {listOfFav.map((list) => (
        <h1>{list.item.name}</h1>
      ))}
    </div>
  );
}

export default FavouriteList;
