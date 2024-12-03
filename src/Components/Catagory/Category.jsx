import React from "react";
import { categoryInfos } from "../Catagory/catagoryFullInfo";
import CategoryCard from "./CategoryCard";
import "./catagory.css";

function Category() {
  return (
    <div>
      <section className="category_container">
        {categoryInfos?.map((infos, index) => (
          <CategoryCard key={index} data={infos} />
        ))}
      </section>
    </div>
  );
}

export default Category;
