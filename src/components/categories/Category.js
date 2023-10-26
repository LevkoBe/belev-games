import React from "react";

const Category = ({ category, onCategoryClick }) => {
  function handleClick() {
    onCategoryClick(category);
  }
  return (
    <div onClick={handleClick}>
      <h3>{category.title}</h3>
      <p>Number of Games: {category.count}</p>
    </div>
  );
};

export default Category;
