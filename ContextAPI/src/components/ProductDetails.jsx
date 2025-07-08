import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";

const ProductDetails = ({
  deepName = "Samsung",
  deepPrice = 2000,
  deepDescription = "12GB WITH 128GB",
}) => {
  let { user } = useContext(UserContext);
  console.log(user);

  return (
    <section>
      <article>
        <h1> UserName: {user.uName}</h1>
        <h1> Email: {user.email}</h1>
      </article>
      <h3>{deepName}</h3>
      <h3>{deepPrice}</h3>
      <h3>{deepDescription}</h3>
    </section>
  );
};

export default ProductDetails;

// ProductDetails.defaultProps = {
//   deepName: "Samsung",
//   deepPrice: 2000,
//   deepDescription: "12GB WITH 128GB",
// };

ProductDetails.propTypes = {
  deepName: PropTypes.string.isRequired,
  deepPrice: PropTypes.number.isRequired,
  deepDescription: PropTypes.string.isRequired,
};
