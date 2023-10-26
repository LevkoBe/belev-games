import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Categories from "./categories/Categories";
import games from "./games/games";
import categoriesList from "./categories/categoriesList";
import Shelf from "./Shelf";
import Category from "./categories/CategoryClass";

const Store = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    let newCategories = categoriesList.map((category) => {
      let correspondingGames = games.filter((game) => game.category === category);
      return new Category(category, correspondingGames);
    });
    newCategories = newCategories.filter((category) => category.games.length !== 0);
    console.log(newCategories);
    setCategories(newCategories);
  }, []);
  return (
    <div>
      <Navigation />
      {/* <Categories categories={categories} onCategorySelection={setActiveCategory} /> */}
      {/* <Shelf activeCategory={activeCategory} /> */}
    </div>
  );
};

export default Store;
