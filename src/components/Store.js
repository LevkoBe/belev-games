import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Categories from "./categories/Categories";
import games from "./lists/games";
import categoriesList from "./lists/categoriesList";
import Shelf from "./Shelf";
import Category from "../classes/CategoryClass";
import "./styles/Store.css";

const Store = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    let newCategories = categoriesList.map((category) => {
      let correspondingGames = games.filter((game) => game.category === category);
      return new Category(category, correspondingGames);
    });
    newCategories = newCategories.filter((category) => category.games.length !== 0);
    setCategories(newCategories);
  }, []);
  return (
    <>
      <Navigation />
      <div className="store">
        <Categories className="Categories" categories={categories} onCategorySelection={setActiveCategory} />
        <Shelf activeCategory={activeCategory} />
      </div>
    </>
  );
};

export default Store;
