import React, { useContext, useState } from "react";
import { PlanetContext, FavContext, FavListContext } from "../planetContext";
import Planets from "./tab1";
import "../App.css";

function FavouriteList() {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);

  return (
    <div className="list-background">
      <div className="favList">
        <ul>
          {listOfFav.map((list) => (
            <li key={list.item.id}>{list.item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FavouriteList;
