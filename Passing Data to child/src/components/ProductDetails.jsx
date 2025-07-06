import React from "react";
import PropTypes from "prop-types";

const ProductDetails = ({
  deepName = "Samsung",
  deepPrice = 2000,
  deepDescription = "12GB WITH 128GB",
}) => {
  return (
    <section>
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
