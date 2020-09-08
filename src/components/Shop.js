import React, { useState, useEffect } from "react";
import data from "../data.json";
import Button from "@material-ui/core/Button";

function Shop(props) {
  const [products, setProducts] = useState([]);
  const [sectionName, setSectionName] = useState(props.match.params.id);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const sectionSpecificFilteredData = data.find(
      (section) => section.section === sectionName
    );
    const { products } = sectionSpecificFilteredData;
    setProducts(products);
    setIsLoading(false);
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
      <div className="col-md-6 col-lg-4">
        <img
          className="img-fluid mx-auto h-75 w-100"
          src={product.img}
          alt={product.description}
        />

        <div className="d-flex justify-content-between p-3">
          <div className="details d-flex flex-column">
            <p>{product.description}</p>
            <p>{`${product.price} $`}</p>
          </div>
          <div>
            {" "}
            <Button
              type="button"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                handleButton(product);
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      {isLoading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        products.length > 0 &&
        products.map((product, index) => (
          <ProductDetails key={index} product={product} />
        ))
      )}
    </div>
  );
}

export default Shop;
