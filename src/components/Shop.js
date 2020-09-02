import React, { useState, useEffect } from "react";
import data from "../data.json";

function Shop({ match }) {
  const [products, setProducts] = useState([]);
  const [sectionName, setSectionName] = useState(match.params.id);

  useEffect(() => {
    const sectionSpecificFilteredData = data.find((section) => section.section === sectionName);
    const { products } = sectionSpecificFilteredData;
    
    setProducts(products);
  });

  const ProductDetails = ({ product }) => {
    debugger;
    return (<div className="product-details" style={{ height: "200px", width: "200px" }}>
      <img src={product.img} alt={product.description} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>)
  };

  return (
    <div className="shop">
      <h1>{match.params.id}</h1>
      {products.length > 0 && products.map((product, index) => <ProductDetails key={index} product={product} />)}
    </div>
  );
}

export default Shop;
