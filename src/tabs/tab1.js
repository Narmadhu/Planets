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

function Planets({ img }) {
  const [items, setItems] = useContext(PlanetContext);
  const [isFavourite, setIsFavourite] = useContext(FavContext);
  const [listOfFav, setListOfFav] = useContext(FavListContext);

  return (
    <div className="items-background">
      <img src={img} alt="" />
      <div className="items">
        {items.map((item) => (
          <h2 key={item.id}>
            {item.name}

            <FiStar
              id="star"
              onClick={() => {
                item.isFavourite = !isFavourite;
                setListOfFav([{ item }, ...listOfFav]);
              }}
            />
          </h2>
        ))}
      </div>
    </div>
  );
}
export default Planets;
