import React from "react";
import ProductDetails from "./ProductDetails";

const Productitem = ({ product }) => {
  //   let { product } = props;
  //   console.log(product);

  return (
    <div>
      <h1> Displaying Product Items</h1>
      <ProductDetails
        deepName={product.name}
        deepPrice={product.price}
        deepDescription={product.description}
      />
    </div>
  );
};

export default Productitem;
