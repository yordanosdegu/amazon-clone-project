import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import "./Product.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/actiontype";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // Destructure the properties from the product object
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  // rating is defined and has rate and count properties
  const ratingValue = rating?.rate || 0; // Default to 0 if rating is undefined or doesn't have 'rate'
  const ratingCount = rating?.count || 0; // Default to 0 if rating is undefined or doesn't have 'count'

  return (
    <div className={`card_container ${flex ? "product_flexed" : ""}`}>
      {/* Correctly use template literals for the Link */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className="rating">
          {/* Show rating */}
          <Rating value={ratingValue} precision={0.1} readOnly />
          {/* Show rating number */}
          <small>{ratingCount} reviews</small>
        </div>
        <div>
          {/* Show price */}
          <CurrencyFormat amount={price} />
        </div>
      </div>
      {renderAdd && (
        <button className="Button" onClick={addToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
