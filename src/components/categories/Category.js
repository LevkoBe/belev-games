import React from "react";
import "../styles/Categories.css";

const Category = ({ category, onCategoryClick }) => {
  function handleClick() {
    onCategoryClick(category);
  }

  return (
    <div onClick={handleClick} className="category-item">
      <div className="category-name">
        <h3>{category.title}</h3>
      </div>
      <div className="category-count">{category.count}</div>
    </div>
  );
};

export default Category;
