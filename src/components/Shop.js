import React, { useState, useEffect } from "react";
import data from "../data.json";

function Shop({ match }) {
  const [items, setItems] = useState({});
  const [sectionName] = useState(match.params.id);

  useEffect(() => {
    const filterItems = data.find((section) => section.section === sectionName);
    setItems(filterItems);
    console.log(items);
  }, [match.url]);

  console.log(match);

  const clothes =
    items.length > 0 &&
    items.products.map((item) => (
      <div style={{ height: "200px", width: "200px" }}>
        <img src={item.img} alt={item.description} />
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    ));

  return (
    <div className="shop">
      <h1>{match.params.id}</h1>
      {clothes}
    </div>
  );
}

export default Shop;
