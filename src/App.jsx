import { useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes/Recipes";
import { useEffect } from "react";

function App() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <>
      <h1 className="text-4xl">Recipe Calories</h1>
      <Recipes recipe={recipe}></Recipes>
    </>
  );
}

export default App;
