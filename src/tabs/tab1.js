import React, { useContext, useState } from "react";
import "../App.css";
import {
  PlanetContext,
  FavProvider,
  FavListContext,
  FavContext,
} from "../planetContext";
import { FiStar } from "react-icons/fi";
import FavouriteList from "./tab2";

function Planets() {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);
  return (
    <div>
      <div>
        {items.map((item) => (
          <h2 key={item.id}>
            {item.name}
            <FiStar
              onClick={() => {
                item.isFavourite = !isFavourite;
                setListOfFav([{ item }, ...listOfFav]);
                console.log(listOfFav);
              }}
            />
          </h2>
        ))}
      </div>
      <div></div>
    </div>
  );
}
export default Planets;
