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
  // const [isYellow, setYellow] = useState(false);

  // const changeColor = () => {
  //   setYellow(!isYellow);
  // };

  return (
    <div className="items">
      {items.map((item) => (
        <h2 key={item.id}>
          {item.name}
          <FiStar
            id="star"
            // className={isYellow ? "yellow" : ""}
            onClick={() => {
              item.isFavourite = !isFavourite;
              setListOfFav([{ item }, ...listOfFav]);

              // changeColor();
            }}
          />
        </h2>
      ))}
    </div>
  );
}
export default Planets;
