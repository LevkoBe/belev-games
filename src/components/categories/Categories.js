import React from "react";
import Category from "./Category";
import Title from "../Title";
import "../styles/Categories.css";

const Categories = ({ categories, onCategorySelection }) => {
  function handleCategorySelection(category) {
    onCategorySelection(category);
  }

  return (
    <div className="categories-container">
      <Title title="Categories" onTitleClick={handleCategorySelection} />
      {categories.map((category, index) => (
        <Category key={index} category={category} onCategoryClick={handleCategorySelection} />
      ))}
    </div>
  );
};

export default Categories;
