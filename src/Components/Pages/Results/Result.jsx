import React, { useEffect, useState } from "react";
import "./Result.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../APi/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function Result() {
  const { categoryName } = useParams(); // Access the category name from URL
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState([]); // State to store API response

  useEffect(() => {
    // Call the API when the component mounts or categoryName changes
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${productUrl}/product/category/${categoryName}`
        );
        setResult(response.data);
        setLoading(false);  // Fixed: change 'isLoading(false)' to 'setLoading(false)'
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoading(false);  // Fixed: change 'isLoading(false)' to 'setLoading(false)'
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="products_container">
            {result?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Result;
