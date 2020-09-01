import React, { useState, useEffect } from "react";
import Data from "../Data";

function Shop({ match }) {
  const [items, setItems] = useState({});
  const [sectionName] = useState(match.params.id);

  useEffect(() => {
    const filterItems = Data.find((section) => section.section === sectionName);
    setItems(filterItems);
    console.log(items.products);
  }, [match, sectionName, items]);

  const clothes =
    items.length > 0
      ? items.products.map((item) => (
          <div>
            <img src={item.img} alt="" />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))
      : null;

  return (
    <div className="shop">
      <h1>{match.params.id}</h1>
      {clothes}
    </div>
  );
}

export default Shop;
