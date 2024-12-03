import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../APi/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function ProductDetail() {
  const { productsId } = useParams(); // Destructuring the productId from the URL
  const[isLoading, setLoading] = useState(false)
  const [product, setProduct] = useState({});

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${productUrl}/product/${productsId}`)

      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [productsId]); // Depend on productsId to trigger the effect when it changes

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
