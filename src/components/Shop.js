import React, { useState, useEffect } from "react";
import data from "../data.json";
import Button from "@material-ui/core/Button";

function Shop(props) {
  const [products, setProducts] = useState([]);
  const [sectionName, setSectionName] = useState(props.match.params.id);

  useEffect(() => {
    const sectionSpecificFilteredData = data.find(
      (section) => section.section === sectionName
    );
    const { products } = sectionSpecificFilteredData;
    setProducts(products);
  }, [sectionName]);

  useEffect(() => {
    setSectionName(props.match.params.id);
  }, [props.match.params.id]);

  const handleButton = (product) => {
    const cartItems = props.cart.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    props.setCart(cartItems);
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
            <p className="product_price">{`${product.price} $`}</p>
            <Button
              type="button"
              className="product_button"
              variant="outlined"
              color="secondary"
              onClick={() => handleButton(product)}
            >
              Add To Cart
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
