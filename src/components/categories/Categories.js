import React from "react";
import Category from "./Category";
import Title from "../Title";
import "../Categories.css";

const Categories = ({ categories, onCategorySelection }) => {
  function handleCategorySelection(category) {
    onCategorySelection(category);
  }
  return (
    <div>
      <Title title="Categories" />
      {categories.map((category, index) => (
        <Category key={index} category={category} onCategoryClick={handleCategorySelection} />
      ))}
    </div>
  );
};

export default Categories;
