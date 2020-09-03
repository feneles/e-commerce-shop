import React, { useState, useEffect } from "react";
import data from "../data.json";
import Button from "@material-ui/core/Button";

function Shop({ match }) {
  const [products, setProducts] = useState([]);
  const [sectionName, setSectionName] = useState(match.params.id);

  useEffect(() => {
    const sectionSpecificFilteredData = data.find(
      (section) => section.section === sectionName
    );
    const { products } = sectionSpecificFilteredData;
    setProducts(products);
  }, []);

  const handleButton = (e) => {
    e.preventDefault();
  };

  const ProductDetails = ({ product }) => {
    return (
      <div className="product_details">
        <div className="product_container">
          <img
            className="product_image"
            src={product.img}
            alt={product.description}
          />
          <p className="product_description">{product.description}</p>
          <div className="product_bottom">
            <p className="product_price">{`${product.price} zł`}</p>
            <Button
              className="product_button"
              variant="contained"
              color="secondary"
              onClick={handleButton}
            >
              Kup Teraz
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="shop">
      {products.length > 0 &&
        products.map((product, index) => (
          <ProductDetails key={index} product={product} />
        ))}
    </div>
  );
}

export default Shop;
