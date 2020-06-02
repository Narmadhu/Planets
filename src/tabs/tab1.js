import React, { useState, useEffect } from "react";

function Planets() {
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
    <div>
      {items.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  );
}

export default Planets;
