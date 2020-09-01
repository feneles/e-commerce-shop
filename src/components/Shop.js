import React, { useState, useEffect } from "react";
import Data from "../Data";

function Shop({ match }) {
  const [items, setItems] = useState({});
  const [sectionName] = useState(match.params.id);

  useEffect(() => {
    const filterItems = Data.find((section) => section.section === sectionName);
    setItems(filterItems);
    console.log(items);
  }, [match, sectionName, items]);

  return (
    <div className="shop">
      <h1>{match.params.id}</h1>
    </div>
  );
}

export default Shop;
