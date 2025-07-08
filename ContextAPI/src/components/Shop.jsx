import { useState } from "react";
import Productitem from "./Productitem";

const Shop = () => {
  let [product, setproduct] = useState({
    name: "IPhone 7",
    price: 10000,
    description: "8GB Ram with 128GB",
  });

  return (
    <div>
      <h1> Welcome to my shop </h1>
      <Productitem product={product} />
    </div>
  );
};

export default Shop;
