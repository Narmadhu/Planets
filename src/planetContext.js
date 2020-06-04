import React, { useState, useEffect, createContext } from "react";

export const PlanetContext = createContext();
export const FavContext = createContext();
export const FavListContext = createContext();

export const FavListProvider = (props) => {
  const [listOfFav, setListOfFav] = useState([]);
  return (
    <FavListContext.Provider value={[listOfFav, setListOfFav]}>
      {props.children}
    </FavListContext.Provider>
  );
};

export const FavProvider = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <FavContext.Provider value={[isFavourite, setIsFavourite]}>
      {props.children}
    </FavContext.Provider>
  );
};

export const PlanetProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://assignment-machstatz.herokuapp.com/planet"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <PlanetContext.Provider value={[items, setItems]}>
      {props.children}
    </PlanetContext.Provider>
  );
};
